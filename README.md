# destina-devrim.com

Portfolio von Destina-Devrim Danaci. Eine einzelne Seite aus HTML und CSS, ohne Baukasten und ohne Programme, die man installieren muss.

Die Seite ist auf Englisch. Wer einen Browser auf Deutsch eingestellt hat, sieht sie auf Deutsch. Oben rechts lässt sich mit EN / DE umschalten.

---

## 1. Hochladen auf GitHub

Dafür brauchst du einen Laptop oder PC. Auf dem iPad lassen sich bei GitHub keine Ordner hochladen.

1. Bei [github.com](https://github.com) einloggen.
2. Oben rechts auf **+** und dann **New repository** klicken.
3. Als Namen `destina-devrim.com` eintragen, **Public** auswählen und auf **Create repository** klicken.
4. Auf der nächsten Seite den Link **uploading an existing file** anklicken.
5. Den Projektordner öffnen, **alles darin** markieren (Dateien und die Ordner `css`, `fonts`, `img`, `js`, `video`) und ins Browserfenster ziehen. Den Ordner selbst nicht hineinziehen, nur seinen Inhalt.
6. Warten, bis alle Dateien in der Liste stehen, dann unten auf **Commit changes** klicken.

## 2. Seite online stellen (GitHub Pages)

1. Im Repository auf **Settings** klicken, links dann auf **Pages**.
2. Bei **Source** die Option **Deploy from a branch** wählen.
3. Bei **Branch** `main` und `/ (root)` wählen und auf **Save** klicken.
4. Nach ein bis zwei Minuten erscheint oben ein Link wie `https://DEINNAME.github.io/destina-devrim.com/`. Dort ist die Seite online.

## 3. Eigene Domain verbinden

**Beim Domain-Anbieter** (dort, wo du destina-devrim.com gekauft hast) bei den DNS-Einstellungen diese Einträge anlegen und alte A-Einträge für `@` löschen:

| Typ   | Name | Wert                  |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | DEINNAME.github.io    |

`DEINNAME` ist dein GitHub-Benutzername.

**Bei GitHub:** Settings, Pages, bei **Custom domain** `destina-devrim.com` eintragen und auf **Save** klicken. Sobald der Haken grün ist, **Enforce HTTPS** anhaken. Das kann bis zu einem Tag dauern, weil sich die DNS-Einträge erst verteilen müssen.

## 4. Bei Google anmelden (optional)

1. [Google Search Console](https://search.google.com/search-console) öffnen und `destina-devrim.com` als Property hinzufügen. Google erklärt dort, wie man die Domain bestätigt.
2. Links auf **Sitemaps** klicken, `sitemap.xml` eintragen und senden.

Danach findet Google die Seite schneller. Bis sie in den Suchergebnissen auftaucht, vergehen meist ein paar Tage.

## 5. Texte ändern

Alle Texte stehen in `index.html`. Auf GitHub die Datei anklicken, oben rechts auf den Stift tippen, ändern und mit **Commit changes** speichern. Nach einer Minute ist die Änderung online.

Jeder Text steht zweimal da, einmal mit `class="en"` (Englisch) und einmal mit `class="de"` (Deutsch). Beide Versionen ändern.

Wenn du die Seite änderst, in `sitemap.xml` das Datum bei `<lastmod>` auf den heutigen Tag setzen.

## Was wo liegt

| Datei / Ordner | Inhalt |
|---|---|
| `index.html` | die Seite mit allen Texten |
| `css/style.css` | Farben, Schrift, Layout |
| `js/main.js` | Sprachumschaltung, Video beim Aufklappen |
| `img/` | alle Bilder, komprimiert |
| `video/` | Träumerei-Video |
| `fonts/` | Schrift Archivo Narrow (freie Lizenz, siehe `OFL.txt`) |
| `sitemap.xml`, `robots.txt` | für Suchmaschinen |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Icon im Browser-Tab und auf dem Homescreen |
