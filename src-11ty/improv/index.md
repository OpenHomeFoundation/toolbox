---
layout: product-overview.html
title: Improv Wi-Fi
description: Connect devices to Wi-Fi via Bluetooth from your browser
image: /images/improv.png

productTitle: Improv Wi‑Fi
productSubtitle: Provision Wi‑Fi for devices without a custom app

actions:
  - tag_open: '<improv-wifi-launch-button><div class="action-item" slot="activate">'
    title: Connect device to Wi‑Fi
    description: Provision your device over Bluetooth Low Energy
    href: "#"
    icon: /svgs/wifi.svg
    tag_close: '</div></improv-wifi-launch-button>'

  - title: Documentation
    description: Learn about the Improv protocol and supported transports
    href: https://www.improv-wifi.com/
    icon: /svgs/doc.svg
---

Use the open Improv protocol to provision Wi‑Fi via BLE or Serial from your browser. Great for makers and product developers.

<script type="module">
  import 'improv-wifi-sdk';
</script>
