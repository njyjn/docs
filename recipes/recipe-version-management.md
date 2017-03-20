---
title: Recipe version management
date: 2017-02-22 05:15:00 Z
---

# Recipe version management
Every time a recipe is saved, a version of the recipe is saved. Previous versions of a recipe can be restored at any time. Recipe versions can be viewed in the **Versions** tab and are denoted by their version number.

In the version history view, each version is attributed to the user who made the change (relevant for multi-user team accounts), with a timestamp when the version was saved, as well as the change type associated with that version.

![Recipe versions](/_uploads/_recipes/recipe-version-management/recipe-versions.png)

*Recipe versions as viewed from the Versions tab*

The are 2 general change types:
- Recipe change

Recipe logic changes, e.g. adding or removing steps and changing field mappings, will create a new version of the recipe when the recipe is saved.

- Schema change

Carrying out a schema refresh (e.g. updating Workato when fields were added or removed in connected apps) will create a new version of the recipe automatically.

# Restoring versions
To restore previous versions of the recipe, switch to the **Versions** tab. Whenever a recipe is saved, a new version of the saved recipe will be created. Recipe versions can be first previewed before being restored.

[![https://gyazo.com/45711334ec05ed2e08fb6a3aa23232bb](https://i.gyazo.com/45711334ec05ed2e08fb6a3aa23232bb.gif)](https://gyazo.com/45711334ec05ed2e08fb6a3aa23232bb)

*Previewing and restoring a previous version of the recipe*

Restored versions will be created as a new version. In the following case, the recipe had 3 versions initially. When version 2 of the recipe was restored, the restored version was created as Version 4.

![Restored version](/_uploads/_recipes/recipe-version-management/restored-version.png)

*Restoring version 2 of the recipe creates that copy as version 4*