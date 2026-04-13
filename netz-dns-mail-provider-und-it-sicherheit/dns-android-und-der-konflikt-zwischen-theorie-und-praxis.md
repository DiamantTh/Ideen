---
layout: default
title: DNS, Android und der Konflikt zwischen Theorie und Praxis
---

[← Zurück zu Netz, DNS, Mail, Provider und IT-Sicherheit](../netz-dns-mail-provider-und-it-sicherheit.md) | [← Startseite](../index.md)

# DNS, Android und der Konflikt zwischen Theorie und Praxis

Ein prägnanter Strang im Material ist die Kritik an der DNS-Architektur auf Android. Die Diskussion um PersonalDNSfilter, lokale Filtermechanismen und VPN-Konflikte zeigt exemplarisch, wie schnell vermeintlich kleine Systementscheidungen zu tiefen Praxisproblemen werden. Ohne Root wird lokale DNS-Filterung oft über das VPN-Interface erzwungen. Das führt dazu, dass DNS-Schutz und echte VPN-Nutzung nicht sauber nebeneinander funktionieren. Die Theorie mag technisch erklärbar sein, praktisch bleibt aber ein klares Defizit: Ein Sicherheitswerkzeug blockiert ein anderes.

Gerade darin zeigt sich die Leitidee des Bestands, dass Systeme an realen Nutzungssituationen gemessen werden müssen. Öffentliche WLANs, Hotels, Captive Portals, restriktive Netze und mobile Alltagsszenarien verlangen Lösungen, die nicht nur im Labor logisch wirken. Wenn Menschen Schutz brauchen, darf die Antwort nicht in einem Bündel aus Workarounds bestehen, die sich gegenseitig behindern. Aus dieser Beobachtung entsteht der Wunsch nach tieferer Systemintegration: DNS-Filterung sollte nativ, kombinierbar und ohne künstliche Tunneltricks möglich sein. Technik wird hier an Klarheit und Nutzbarkeit gemessen, nicht an der Eleganz von Umgehungslösungen.

---

[← Zurück zu Netz, DNS, Mail, Provider und IT-Sicherheit](../netz-dns-mail-provider-und-it-sicherheit.md) | [Startseite](../index.md)
