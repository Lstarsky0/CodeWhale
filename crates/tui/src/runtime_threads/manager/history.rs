use anyhow::Result;
use codewhale_protocol::MAX_CANONICAL_HISTORY_BYTES;

use crate::session_manager::SavedSession;

pub(crate) async fn history_owner_work<T: Send + 'static>(
    work: impl FnOnce() -> Result<T> + Send + 'static,
) -> Result<T> {
    #[cfg(test)]
    let ticket = crate::test_support::env_scope_ticket();
    codewhale_app_server::daemon_socket::owner_work(move || {
        #[cfg(test)]
        let _membership = crate::test_support::join_env_scope(ticket);
        work()
    })
    .await
}

pub(crate) fn saved_document_digest(session: &SavedSession) -> Result<String> {
    let mut size = HistorySizeBound(MAX_CANONICAL_HISTORY_BYTES);
    serde_json::to_writer(&mut size, &session.transport_form())?;
    Ok(codewhale_runtime::hashing::sha256_hex(
        codewhale_runtime::hashing::canonical_json(&serde_json::to_value(session)?).as_bytes(),
    ))
}

pub(crate) struct HistorySizeBound(pub(crate) usize);
impl std::io::Write for HistorySizeBound {
    fn write(&mut self, bytes: &[u8]) -> std::io::Result<usize> {
        if bytes.len() > self.0 {
            return Err(std::io::Error::new(
                std::io::ErrorKind::InvalidData,
                "full history exceeds byte transport bound; source retained",
            ));
        }
        self.0 -= bytes.len();
        Ok(bytes.len())
    }
    fn flush(&mut self) -> std::io::Result<()> {
        Ok(())
    }
}
