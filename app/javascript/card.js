const pay = () => {
  Payjp.setPublickey("pk_test_******************") // PAY.JPテスト公開鍵 今の状態でそのままgithubへプッシュすると悪用されるため、環境変数へ変更する必要がある。
  const form = document.getElementById("charge-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("フォーム送信時にイベント発火")
  });
};
window.addEventListener("load", pay);