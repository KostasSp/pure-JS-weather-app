class Fetch {
  async getCurrent(data) {
    const myKey = config.MY_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${myKey}&units=metric`
    );

    const receivedJson = await response.json();
    return receivedJson;
  }
}
