/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    branches: ["master"],
    tagFormat: "${version}",
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                "preset": "conventionalcommits",
                "releaseRules": [
                    { "type": "docs", "release": "patch" }
                ]
            }
        ],
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md",
                changelogTitle: "Changelog"
            }
        ],
        [
            "@semantic-release/exec",
            {
                "generateNotesCmd": "./bin/run-dch ${lastRelease.version} ${nextRelease.version}"
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": [
                    "CHANGELOG.md",
                    "debian/changelog",
                ],
                "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
            }
        ]
    ]
};
