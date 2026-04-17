# Everglow

Welcome to the repository for our Minecraft modpack, Everglow! This guide provides instructions on how to build the modpack from source, contribute to its development, and report any issues you may encounter.

## Building from Source

To build the modpack from source or contribute to its development, you will need to have [Packwiz](https://packwiz.infra.link/) installed on your system. Packwiz is a command-line tool designed for creating and managing Minecraft modpacks.

1.  **Clone the Repository:** Start by cloning this repository to your local machine.
2.  **Export the Modpack:** Open your terminal, navigate to the root folder of the cloned repository, and run the following command:
    ```bash
    packwiz modrinth export
    ```
    This command will generate a `.mrpack` file within the root folder.
3.  **Import to Launcher:** You can import the generated `.mrpack` file into any compatible Minecraft launcher, such as Modrinth App, Prism Launcher, or others that support the Modrinth pack format.

## Contributing

We welcome contributions to improve the modpack! Whether you are adding new mods, updating existing ones, or tweaking configurations, please follow these guidelines:

### Managing Non-Mod Files

For files other than mods (such as configuration files, resource packs, or scripts), you can simply drag and drop them into their respective locations within the repository structure.

### Managing Mods with Packwiz

To manage mods, you must use the Packwiz CLI in the root folder of the repository. Here are some essential commands you will likely need:

*   **Adding Mods:** To add a new mod from Modrinth, use the `add` command:
    ```bash
    packwiz modrinth add <mod-name-or-id>
    ```
    You can also add mods from CurseForge using `packwiz curseforge add <mod-name>`.
*   **Removing Mods:** To remove a mod from the pack, use the `remove` command:
    ```bash
    packwiz remove <mod-name>
    ```
*   **Updating Mods:** To update a specific mod or all mods to their latest versions, use the `update` command:
    ```bash
    packwiz update <mod-name>
    # Or to update all mods:
    packwiz update --all
    ```
*   **Pinning Mods:** If you want to prevent a specific mod from being updated automatically (e.g., if a newer version breaks compatibility), you can pin it:
    ```bash
    packwiz pin <mod-name>
    ```
    To allow updates again, use `packwiz unpin <mod-name>`.
*   **Refreshing the Index:** **Always** run the following command before committing and pushing your changes. This ensures that the `index.toml` file is up-to-date with all your modifications:
    ```bash
    packwiz refresh
    ```

## Reporting Bugs and Issues

If you encounter any bugs, crashes, or other issues while playing the modpack, please let us know!

1.  Navigate to the **Issues** tab at the top of this GitHub repository and create a new Issue
2.  Provide a clear and descriptive title for the issue.
3.  In the description, please include as much detail as possible, such as:
    *   Steps to reproduce the issue.
    *   Crash reports or error logs (use a service like Pastebin or GitHub Gists for long logs).
4.  Submit the issue, and we will look into it as soon as possible.
