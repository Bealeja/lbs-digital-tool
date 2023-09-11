const Donations = () => {
  const processPayment = async () => {
    fetch("http://localhost:3001/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <section>
      <h2>Donate</h2>
      <form class="radio-button-form">
        <div class="label-container">
          <input type="radio" id="5" name="money" value="5" />
          <label>$5</label>
        </div>
        <div class="label-container">
          <input type="radio" id="10" name="money" value="10" />
          <label>$10</label>
        </div>
        <div class="label-container">
          <input type="radio" id="20" name="money" value="20" />
          <label>$20</label>
        </div>
      </form>

      <div class="flex-row spread-items">
        <label class="mcui-checkbox">
          <input type="checkbox" />
          <div>
            <svg class="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
              <title>checkmark-circle</title>
              <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
            </svg>
          </div>
          <h5>Every Month</h5>
        </label>
        <button class="button-purple" onClick={processPayment} type="submit">
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Donations;
