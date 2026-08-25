const ENV = {
  BASE_URL: "https://myapp.com",
  TIMEOUT: 5000,
  RETRIES: 2,
  BROWSER: "Chrome"
}

const EXPECTED_RESPONSE = {
  status: 200,
  body: {
    user: { role: "admin", active: true }
  }
}