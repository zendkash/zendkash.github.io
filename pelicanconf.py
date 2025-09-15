AUTHOR = 'Zendai Kashino'
SITENAME = 'Zendai Kashino'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'UTC'

DEFAULT_LANG = 'en'

# Theme settings
THEME = 'theme'

# Static paths
STATIC_PATHS = ['images', 'static']
STATIC_URL_PREFIX = ''


# URL settings for pages
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

# Disable category and author pages, since we don't use them
CATEGORY_SAVE_AS = ''
AUTHOR_SAVE_AS = ''
TAG_SAVE_AS = ''

# Feed generation
FEED_ALL_ATOM = None
TRANSLATION_FEED_ATOM = None

# i18n settings
I18N_SUBSITES = {
    'jp': {
        'SITENAME': '柏野　善大',
        'AUTHOR': '柏野　善大',
    }
}

# Custom settings from old _config.yml
T = {
    'title': {
        'en': "Zendai Kashino",
        'jp': "柏野　善大"
    },
    'description': {
        'en': "OR/ML Engineer",
        'jp': "最適化・機械学習 エンジニア"
    },
    'langchange': {
        'en': "English",
        'jp': "日本語"
    }
}

# We don't use these, so clear them
LINKS = ()
SOCIAL = ()

DEFAULT_PAGINATION = False

# Uncomment if you want document-relative URLs when developing
# RELATIVE_URLS = True
