
# Portfolio UGC — **ZAINAB_UGC**

Site web **one‑page**, moderne et animé pour une créatrice UGC marocaine.

## ✨ Fonctionnalités
- Design épuré, inspiré par des **touches marocaines** (motifs géométriques, palette chaude)
- **Animations** fluides (AOS, GSAP) et **carrousel** (Swiper)
- **Lightbox** vidéo intégrée (YouTube)
- **Mobile‑first**, performant et prêt pour **GitHub Pages**

## 🗂️ Structure
```
.
├── index.html
├── README.md
├── assets/
│   ├── moroccan-border.svg
│   └── moroccan-pattern.svg
├── css/
│   └── style.css
└── js/
    └── main.js
```

> Les vignettes de portfolio utilisent des **placeholders**. Remplacez‑les par vos captures (600×800) et collez l’URL YouTube dans `data-video`.

## 🚀 Déploiement (GitHub Pages)

### 1) Créer le dépôt
- Sur GitHub, créez un repo **public** (ex : `zainab-ugc`)
- Clonez en local :
  ```bash
  git clone https://github.com/<votre-username>/zainab-ugc.git
  cd zainab-ugc
  ```

### 2) Ajouter les fichiers
- Copiez les fichiers de ce projet dans le dossier
- Puis :
  ```bash
  git add .
  git commit -m "Initial commit: ZAINAB_UGC portfolio"
  git push origin main
  ```

### 3) Activer GitHub Pages
- Ouvrez **Settings → Pages**
- **Source** : `Deploy from a branch`
- **Branch** : `main` (dossier `/root`)
- Enregistrez → l’URL sera du type `https://<votre-username>.github.io/zainab-ugc/`

### 4) (Optionnel) Domaine personnalisé
- Ajoutez votre domaine dans **Settings → Pages**
- Créez un enregistrement DNS `CNAME` vers `your-username.github.io`

## 🧩 Personnalisation rapide
- **Nom & slogan** : `index.html` (section **HERO**)
- **Bio & stats** : `index.html` (section **ABOUT**)
- **Portfolio** : modifiez chaque slide `<a.thumb>`
  - `img src` → votre vignette
  - `data-video` → URL `https://www.youtube.com/embed/ID`
- **Services** : `index.html` (section **SERVICES**)
- **Avis** : `index.html` (section **TESTIMONIALS**)
- **Contact** : `index.html` → email + réseaux
- **Couleurs** : `css/style.css` → variables `:root`

## 🧠 Astuces performance
- Remplacez les placeholders par des images **compressées** (WebP)
- Ajoutez `loading="lazy"` sur les images (déjà présent)
- Hébergez les polices en local si besoin

## 🛠️ Développement local
Vous pouvez ouvrir `index.html` directement dans votre navigateur. Pour un petit serveur local :
```bash
python3 -m http.server 5173
```
Puis ouvrez : http://localhost:5173

## 📄 Licence
Ce modèle est fourni pour usage personnel/pro.

---
Fait avec ❤ au Maroc.
