import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";

const walletConnectProjectId = "a9e12f12c96d5584f43dc1307d31954c";

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "My wagmi + ConnectKit App",
    walletConnectProjectId,
  }),
);
