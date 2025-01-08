// First, we must import the schema creator

// Then import schema types from any plugins that might expose them
import experience from './experience';
import pages from './pages';
import seo from './seo';
import siteSettings from './siteSettings';
import technology from './technology';

// Then we give our schema to the builder and provide the result to Sanity
export default [experience, pages, seo, siteSettings, technology];
