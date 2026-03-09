# Fix Skills Related Files - TODO List

## Issues to Fix:
1. [x] Skills.tsx - Fix link generation to handle dots and special characters
2. [ ] AwsInfo.tsx - Verify slug mapping is correct
3. [ ] TechPage.tsx - Change back button to navigate to "#skills"
4. [ ] page.tsx (skills/[slugs]) - Fix async params handling for Next.js 15+

## Implementation:
- Create a slugify function to convert skill names to URL-safe slugs
- Update all skill links to use the slugified version
- Fix the back button navigation in TechPage
- Fix the params handling in the dynamic route page

