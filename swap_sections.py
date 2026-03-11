import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

faq_pattern = re.compile(r'(\s*\{\/\* Homepage FAQ Section \(Big 10\) \*\/\}\s*<section.*?<\/section>\n)', re.DOTALL)
feedback_pattern = re.compile(r'(\s*\{\/\* Client Success \/ Testimonials via Glassmorphism \*\/\}\s*<section.*?<\/section>\n)', re.DOTALL)

faq_match = faq_pattern.search(content)
feedback_match = feedback_pattern.search(content)

if faq_match and feedback_match:
    faq_block = faq_match.group(1)
    feedback_block = feedback_match.group(1)
    
    # We want to replace the combined area of both with Feedback then FAQ.
    # But since they are adjacent, we can just replace the block that contains both.
    
    combined_pattern = re.compile(r'\s*\{\/\* Homepage FAQ Section \(Big 10\) \*\/\}.*?\{\/\* Client Success \/ Testimonials via Glassmorphism \*\/\}.*?<\/section>\n', re.DOTALL)
    
    combined_match = combined_pattern.search(content)
    if combined_match:
        # Swap their order
        new_combined = f"\n{feedback_block}\n{faq_block}\n"
        content = content[:combined_match.start()] + new_combined + content[combined_match.end():]
        
        with open('src/app/page.tsx', 'w') as f:
            f.write(content)
        print("Successfully swapped sections.")
    else:
        print("Could not find combined block.")
else:
    print("Could not find individual blocks.")
