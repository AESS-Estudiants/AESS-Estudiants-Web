<p align="center">
  <a href="https://aess-estudiants.vercel.app/">
    <img src="images/logos/aess/LogoAESS.svg" alt="AESS Estudiants" width="40%">
  </a>
</p>

Aquest és el repositori de la web de AESS Estudiants. Aquí es troba tota la informació necessària per l'actualització i manteniment de la web.

Aquesta web està allotjada a Vercel. Per poder accedir a ella, pots visitar el següent [enllaç](https://vercel.com/aess-estudiants-projects/aess-estudiants).

Cada cop que s'actualitzi la branca `main`, la web s'actualitzarà automàticament.




# 🤝 Colaboració

Per a colaborar en el projecte, cal seguir els següents passos:

## 🔀 Branques Git

El nostre projecte utilitza dos branques principals:

- **main**: Conté codi estàbil i preparat per a la producció. Només es fusionen canvis probats i aprovats des de `develop`.
- **develop**: La branca activa on es fan nous features i corregir errors. Totes les branques de funcions s'han de crear des de `develop` i fusionar de volta després de la revisió.

> [!warning]
> Sempre baseu el treball nou en `develop` i fusioni via pull requests.



## 📚 Pasos per col·laborar

Següents passos per col·laborar en el projecte:

1. **Sincronitza la branca `develop` localment** per assegurar-te que estàs treballant amb les últimes canvis:
   ```sh
   git switch develop
   git fetch origin
   git pull origin develop
   ```
2. **Crea una nova branca** des de `develop`. El nom de la branca ha de seguir la convenció (`feature/`, `fix/`, `chore/`).
   ```sh
   git switch -c feature/your-feature-name
   ```

3. **Treballa sobre els teus canvis** i commit regularment. El missatge del commit ha de seguir les convencions (feature:, fix:, chore:). Per més detalls, consulta [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). Utilitzem `pre-commit` per assegurar la qualitat i la consistència del codi. Quan fas commits, `pre-commit` executa automàticament comprovacions com el format, el linting i la validació dels missatges del commit. Si es troben problemes, el commit serà blocat fins que no es solucionin. Això ajuda a mantenir codi net i estàndard.
   ```sh
   git add .
   git commit -m "feat: Add new feature description"
   ```
   Si el nom de la branca o el missatge del commit no segueix la convenció, `pre-commit` blocarà el commit o el push.
4. **Pushea la teva branca** al repositori:
   ```sh
   git push origin feature/your-feature-name
   ```
5. **Obre una petició de fusionament (MR)** a `develop`, describint els teus canvis. Recorda assignar un revisor.
6. **Demana revisions** al revisor i resol la feedback.
7. **Fusiona la teva MR** una vegada aprovada i passats els tests.
8. **Elimina la teva branca** després de la fusió per mantenir el repositori net.


---
<p align="center"><em>Fet amb 💙 per AESS Estudiants</em></p>
