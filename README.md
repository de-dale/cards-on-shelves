```
###################################################################################################
###                            _                         _          _                           ### 
###            ___ __ _ _ __ __| |___    ___  _ __    ___| |__   ___| |_   _____  ___           ###
###           / __/ _` | '__/ _` / __|  / _ \| '_ \  / __| '_ \ / _ \ \ \ / / _ \/ __|          ###
###          | (_| (_| | | | (_| \__ \ | (_) | | | | \__ \ | | |  __/ |\ V /  __/\__ \          ###
###           \___\__,_|_|  \__,_|___/  \___/|_| |_| |___/_| |_|\___|_| \_/ \___||___/          ###
###                                                                                             ###
###################################################################################################
```

# Module d'affichage de cartes

Ce module devrait permettre d'éditer et d'afficher des cartes au format "carte à jouer".
Le contenu des cartes fait l'objet de plusieurs autres projets de l'équipe "De-d'ale".

Actuellement, le projet est branché en dur sur les sources du projet _Sphérier_.

# Ebauche d'explication du contenu du projet

### Codex
Les cartes son rassemblées dans un **Codex**. Il correspond à un ensemble de cartes traitant du même contenu (Sphérier, Aide de jeu D&D/PF, cartes des Saveurs, cartes des whiskies). Les cartes dans le Codex sont uniques, et peuvent être consulées et éditées. Si plusieurs Codex partagent la même carte, elle sera alors dupliquée.
Le Codex peut s'enregister sous format `JSON`, ce qui permet de l'importer/exporter.

### Deck
Les cartes d'un Codex peuvent êtres imprimées en un ou plusieurs exemplaires. Le but est de les sortir sous format papier, pour ensuite les manipuler. On parlera alors de **Deck**.
On peut sauvegarder un ou plusieurs Decks dans un Codex. On devrait être capable d'ajouter/retirer une carte du Codex dans un Deck, et de choisir le nombre d'occurrence que l'on souhaite y mettre.
> /!\ Actuellement : Le Deck est la version imprimable du Codex.

### Carte
Les **Cartes** sont la représentation structuré du contenu avec de la veleur ajoutée.
On devrait pouvoir les créer, modifier, supprimer, dupliquer.
Elles possèdent des informations de structure (nom, forme, couleur) et des informations de contenu (les éléments de la carte)

**Elements de la carte :**
Une carte n'a d'intérêt qu'à partir du moment où elle représente un ou plusieurs élément. Il existe les éléments suivants :
- Titre
- Texte long
- Champ Clé/Valeur
D'autres typologies d'éléments devront arriver :
- Image
- Texte long en Markdown
- Constellation
- Encart flottant pour y mettre une "Valeur en point"
