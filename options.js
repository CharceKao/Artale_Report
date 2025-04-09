// 從存儲中載入自訂值
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['customInputValue'], (result) => {
        document.getElementById('customInputValue').value = result.customInputValue || '';
    });
});

// 保存自訂值到存儲
document.getElementById('save').addEventListener('click', () => {
    const customInputValue = document.getElementById('customInputValue').value;
    chrome.storage.sync.set({ customInputValue }, () => {
        document.getElementById('status').textContent = '已保存！';
        setTimeout(() => {
            document.getElementById('status').textContent = '';
        }, 2000);
    });
});