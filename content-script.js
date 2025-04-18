// 從存儲中讀取自訂值並填寫表單
chrome.storage.sync.get(['customInputValue'], (result) => {
  const userValue = result.customInputValue || '不改就自己慢慢打'; // 如果沒有自訂值，使用預設值

  const inputField = document.querySelector('.whsOnd.zHQkBf'); // 根據 class 定位目標欄位
  if (inputField) {
    inputField.value = userValue; // 填寫使用者的自訂值
    inputField.dispatchEvent(new Event('input', { bubbles: true })); // 觸發輸入事件，確保表單更新
    console.log(`已成功填寫欄位值 .whsOnd.zHQkBf，值為: ${userValue}`);
  } else {
    console.warn('未找到目標欄位 .whsOnd.zHQkBf');
  }
});

const inputField2 = document.querySelector('.KHxj8b.tL9Q4c'); // 根據 class 定位目標欄位
if (inputField2) { // 修正為 inputField2
  inputField2.value = 'Hacking / Not the usual way to play the game. (The title of the film is based on the time when the cheat was discovered. GMT+8)'; // 填寫值
  inputField2.dispatchEvent(new Event('input', { bubbles: true })); // 觸發輸入事件，確保表單更新
  console.log('已成功填寫欄位值 .KHxj8b.tL9Q4c');
} else {
  console.warn('未找到目標欄位 .KHxj8b.tL9Q4c');
}

// 勾選「我同意」或類似的選項
const agreeCheckbox = document.querySelector('[role="checkbox"]');
if (agreeCheckbox) {
  agreeCheckbox.click(); // 模擬點擊勾選
  console.log('已成功勾選「我同意」');
} else {
  console.warn('「我同意」的選項未找到');
}