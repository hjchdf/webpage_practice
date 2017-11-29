```json
{
    // Required
    "manifest_version": 2,
    "name": "My Extension",
    "version": "versionString",

    // Recommended
    "default_locale": "en",
    "description": "A plain text description",
    "icons": {
        "16": "icon16.png", // icon used as the favicon for an extension's pages.
        "48": "icon48.png", // icon for the extensions management page (chrome://extensions)
        "128": "icon128.png" // icon for installation and the Chrome Web Store
    },

    // Pick one (or none)
    "browser_action": {
    	"name": "My extension",
        ...
        "browser_action": {
          "default_icon": {                    // optional
            "16": "images/icon16.png",           // optional
            "24": "images/icon24.png",           // optional
            "32": "images/icon32.png"            // optional
          },
          "default_title": "Google Mail",      // optional; shown in tooltip
          "default_popup": "popup.html"        // optional
        },
        ...
    },
    "page_action": {...},

    // Optional
    "author": ...,
    "automation": ...,
    "background": {
        "scripts": ["eventPage.js"],
    	"persistent": false // without the "persistent" key, you have a regular background page
    },
    "background_page": ...,
    "chrome_settings_overrides": {...},
    "chrome_ui_overrides": {
        "bookmarks_ui": {
            "remove_bookmark_shortcut": true,
            "remove_button": true
        }
    },
    "chrome_url_overrides": {...},
    "commands": {...},
    "content_capabilities": ...,
    "content_scripts": [{...}],
    "content_security_policy": "policyString",
    "converted_from_user_script": ...,
    "current_locale": ...,
    "declarative_net_request": ...,
    "devtools_page": "devtools.html",
    "event_rules": [{...}],
    "externally_connectable": {
        "matches": ["*://*.example.com/*"]
    },
    "file_browser_handlers": [...],
    "file_system_provider_capabilities": {
        "configurable": true,
        "multiple_mounts": true,
        "source": "network"
    },
    "homepage_url": "http://path/to/homepage",
    "import": [{"id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}],
    "incognito": "spanning, split, or not_allowed",
    "input_components": ...,
    "key": "publicKey",
    "minimum_chrome_version": "versionString",
    "nacl_modules": [...],
    "oauth2": ...,
    "offline_enabled": true,
    "omnibox": {
        "keyword": "aString"
    },
    "optional_permissions": ["tabs"],
    "options_page": "options.html",
    "options_ui": {
        "chrome_style": true,
        "page": "options.html"
    },
    "permissions": ["tabs"],
    "platforms": ...,
    "plugins": [...],
    "requirements": {...},
    "sandbox": [...],
    "short_name": "Short Name",
    "signature": ...,
    "spellcheck": ...,
    "storage": {
        "managed_schema": "schema.json"
    },
    "system_indicator": ...,
    "tts_engine": {...},
    "update_url": "http://path/to/updateInfo.xml",
    "version_name": "aString",
    "web_accessible_resources": [...]
}
```

