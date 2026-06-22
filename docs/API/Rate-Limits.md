# ⏱️ API Rate Limits

The MOS API implements rate limits to protect the system from overload and abuse.

---

## 🌐 Configuration

API rate limits are configured via environment variables in the file `/boot/config/api/env`.

### Variables

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `RATE_LIMIT_WINDOW` | 1 | Time window in seconds |
| `RATE_LIMIT_MAX` | 20 | Maximum number of requests per time window |

### How It Works

- Maximum of `RATE_LIMIT_MAX` requests within `RATE_LIMIT_WINDOW` seconds
- Default: 20 requests per second

:::danger Do Not Change!
The API rate limits should **not** be changed! These default values are carefully tuned to ensure system stability and security. Modifying these limits may lead to system instability, performance issues, or security vulnerabilities.
:::

:::warning Important
Changes to the configuration require a restart of the API or the server to take effect.
:::

---

## ⚙️ Configuration File

Rate limits are configured in the file `/boot/config/api/env`:

```env
PORT=998
JWT_SECRET=your-secret-key
JWT_EXPIRY_DAYS=1
RATE_LIMIT_WINDOW=1
RATE_LIMIT_MAX=20
NODE_ENV=production
```

:::warning Change JWT_SECRET!
You may change the `JWT_SECRET` in the configuration. Changing the JWT_SECRET is explicitly allowed and recommended for enhanced security. The default secret should be replaced with your own cryptographically secure value for security reasons.
:::

---

## 🔐 Login Rate Limits {#login-rate-limits}

The WebUI login area implements additional rate limits to protect the system from brute-force attacks.

### Configuration

Login rate limits are configured via environment variables in the file `/boot/config/api/env`.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `RATE_LIMIT_MAX_LOGIN` | 5 | Maximum number of failed login attempts |
| `RATE_LIMIT_LOGIN_WINDOW` | 15 | Time window in minutes during which the maximum attempts are allowed |
| `RATE_LIMIT_LOGIN_BLOCK` | 30 | Block duration in minutes after exceeding the limits |

### How It Works

1. A user has `RATE_LIMIT_MAX_LOGIN` (default: 5) login attempts within `RATE_LIMIT_LOGIN_WINDOW` (default: 15 minutes)
2. After exceeding the limit, the account is blocked for `RATE_LIMIT_LOGIN_BLOCK` (default: 30 minutes)
3. The counter is reset in the following cases:
   - API restart
   - Server restart
   - Successful login

### Example

Default configuration:
- Maximum of 5 failed login attempts in 15 minutes
- After 5 failed attempts: 30 minutes block

:::warning Important
Changes to the configuration require a restart of the API or the server to take effect.
:::

---

## 🔄 Resetting Counters

The rate limit counters are reset in the following cases:

- API restart
- Server restart

---

_Parts of this documentation were created with the assistance of AI tools. All AI-generated content has undergone review, but it may still contain inaccuracies, omissions, or outdated information._
