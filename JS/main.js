function main() {
  // BT 1 : Tìm số chẵn/lẻ nhỏ hơn 100

  function handleFindEvenAndOddNumber() {
    var resultEven = document.querySelector(".even");
    var resultOdd = document.querySelector(".odd");

    if (!resultEven || !resultOdd) return;

    var evenNumber = "";
    var oddNumber = "";

    for (var i = 0; i < 100; i++) {
      if (i % 2 === 0) evenNumber = evenNumber + i + " ";
      else oddNumber = oddNumber + i + " ";
    }

    resultEven.textContent = "Số chẵn: " + evenNumber;
    resultOdd.textContent = "Số lẻ: " + oddNumber;
  }

  function findEvenAndOddNumber() {
    var btnElement = document.querySelector(".button-bt-1");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleFindEvenAndOddNumber);
  }

  // BT 2: Đếm số chia hết cho 3

  function handleCountNumber() {
    var result = document.querySelector(".result-bt-2");
    if (!result) return;

    var count = 0;
    for (var i = 0; i <= 1000; i++) {
      if (i % 3 === 0) count++;
    }

    result.textContent = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
  }

  function countNumberDividedBy3() {
    var btnElement = document.querySelector(".button-bt-2");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleCountNumber);
  }

  // BT 3: Tìm số nguyên dương nhỏ nhất

  function handleSumNumber() {
    var result = document.querySelector(".result-bt-3");
    if (!result) return;

    var sum = 0;
    var i = 0;
    while (sum < 1e4) {
      i++;
      sum += i;
    }

    result.textContent = "Số nguyên dương nhỏ nhất: " + i;
  }

  function sumNumber() {
    var btnElement = document.querySelector(".button-bt-3");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleSumNumber);
  }

  // BT 4 : Tính tổng

  function handleTotalNumber() {
    var result = document.querySelector(".result-bt-4");

    var xInput = document.getElementById("x");
    var nInput = document.getElementById("n");
    if (!result || !xInput || !nInput) return;

    var total = 0;
    for (var i = 1; i <= Number(nInput.value); i++) {
      total += Math.pow(Number(xInput.value), i);
    }

    result.textContent = "Tổng: " + total;
  }

  function totalNumber() {
    var btnElement = document.querySelector(".button-bt-4");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleTotalNumber);
  }

  findEvenAndOddNumber();
  countNumberDividedBy3();
  sumNumber();
  totalNumber();
}

main();
