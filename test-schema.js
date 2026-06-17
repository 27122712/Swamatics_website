// Quick test to verify schema config
import { PAGE_SEO_CONFIG } from './src/seo/pageSeoConfig.js';

const config = PAGE_SEO_CONFIG['/rotary-piston-blowers'];
console.log('Schema config for /rotary-piston-blowers:');
console.log(JSON.stringify(config, null, 2));
console.log('\nHas schema?', !!config?.schema);
console.log('Schema type:', typeof config?.schema);
console.log('Schema is array?', Array.isArray(config?.schema));
if (config?.schema) {
  console.log('Schema length:', config.schema.length);
  console.log('First schema type:', config.schema[0]?.type);
}
