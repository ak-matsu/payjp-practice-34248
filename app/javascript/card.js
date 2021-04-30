const pay = () => {
  Payjp.setPublickey("pk_test_******************") // PAY.JPテスト公開鍵 今の状態でそのままgithubへプッシュすると悪用されるため、環境変数へ変更する必要がある。
  const form = document.getElementById("charge-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formResult = document.getElementById("charge-form");
    const formData = new FormData(formResult);

    const card = {
      number: formData.get("order[number]"),
      cvc: formData.get("order[cvc]"),
      exp_month: formData.get("order[exp_month]"),
      exp_year: `20${formData.get("order[exp_year]")}`,
    };
  });
};
window.addEventListener("load", pay);