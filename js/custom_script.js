window.onload = function () {
  const countdownTime = 10; // 倒數秒數，可自行調整
  let countdown = countdownTime;

  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // 將背景顏色更改為純白色
  overlay.style.zIndex = '9999';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  document.body.appendChild(overlay);

  const countdownText = document.createElement('p');
  countdownText.style.fontSize = '2rem';
  countdownText.style.color = '#000'; // 將文字顏色更改為黑色
  countdownText.innerHTML = `倒數 ${countdown} 秒`;
  overlay.appendChild(countdownText);

  const warningText = document.createElement('p'); // 創建新元素
  warningText.style.fontSize = '2rem';
  warningText.style.color = 'red';
  warningText.style.display = 'none'; // 預設為隱藏
  warningText.innerHTML = '快逃';
  overlay.appendChild(warningText);

  const buttonContainer = document.createElement('div'); // 創建 buttonContainer 元素
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'center';
  buttonContainer.style.alignItems = 'center';
  buttonContainer.style.position = 'absolute';
  buttonContainer.style.top = '50%';
  buttonContainer.style.width = '100%';
  buttonContainer.style.transform = 'translateY(-50%)';
  overlay.appendChild(buttonContainer);

  const spacer = document.createElement('div'); // 創建 spacer 元素
  spacer.style.height = '17rem'; // 設置 spacer 高度，可根據需要調整
  overlay.insertBefore(spacer, buttonContainer); // 在 buttonContainer 前插入 spacer

  const confirmButton = document.createElement('button');
  confirmButton.innerHTML = '確認前往';
  confirmButton.disabled = true;
  confirmButton.onclick = function () {
    overlay.style.display = 'none';
  };
  buttonContainer.appendChild(confirmButton); // 將按鈕添加到 buttonContainer

  const cancelButton = document.createElement('button');
  cancelButton.innerHTML = '離開';
  cancelButton.onclick = function () {
    window.location.href = '/';
  };
  buttonContainer.appendChild(cancelButton); // 將按鈕添加到 buttonContainer

  const countdownInterval = setInterval(function () {
    countdown--;
    countdownText.innerHTML = `倒數 ${countdown} 秒`;
  
    if (countdown === 5) { // 如果倒數等於 5
      warningText.style.display = 'block'; // 顯示紅色的「快逃」文字
    }
  
    if (countdown === 0) {
      clearInterval(countdownInterval);
      confirmButton.disabled = false;
      countdownText.style.display = 'none';
    }
  }, 1000);
  // 為按鈕添加樣式
  confirmButton.style.marginRight = '1rem';
  confirmButton.style.padding = '0.5rem 1rem';
  confirmButton.style.fontSize = '1rem';
  confirmButton.style.cursor = 'pointer';

  cancelButton.style.padding = '0.5rem 1rem';
  cancelButton.style.fontSize = '1rem';
  cancelButton.style.cursor = 'pointer';
};