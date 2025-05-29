#!/usr/bin/env python3
"""
Font conversion script to convert TTF to WOFF2
Requires: pip install fonttools brotli
"""

import os
import sys
from pathlib import Path

try:
    from fontTools.ttLib import TTFont
    from fontTools.woff2 import compress
except ImportError:
    print("Please install required packages:")
    print("pip install fonttools brotli")
    sys.exit(1)

def convert_ttf_to_woff2(ttf_path, woff2_path):
    """Convert a TTF font to WOFF2 format"""
    try:
        # Load the TTF font
        font = TTFont(ttf_path)
        
        # Save as WOFF2
        font.flavor = 'woff2'
        font.save(woff2_path)
        
        print(f"✅ Converted: {ttf_path.name} -> {woff2_path.name}")
        return True
    except Exception as e:
        print(f"❌ Error converting {ttf_path.name}: {e}")
        return False

def main():
    # Paths
    fonts_dir = Path("public/fonts/Abhaya_Libre")
    
    if not fonts_dir.exists():
        print(f"❌ Font directory not found: {fonts_dir}")
        return
    
    # Find all TTF files
    ttf_files = list(fonts_dir.glob("*.ttf"))
    
    if not ttf_files:
        print("❌ No TTF files found in the fonts directory")
        return
    
    print(f"Found {len(ttf_files)} TTF files to convert...")
    
    success_count = 0
    for ttf_file in ttf_files:
        # Create WOFF2 filename
        woff2_file = ttf_file.with_suffix('.woff2')
        
        if convert_ttf_to_woff2(ttf_file, woff2_file):
            success_count += 1
    
    print(f"\n🎉 Successfully converted {success_count}/{len(ttf_files)} fonts")
    
    if success_count > 0:
        print("\n📝 Next steps:")
        print("1. Update your CSS to include WOFF2 format")
        print("2. Test the fonts in your browser")
        print("3. Optionally remove TTF files if WOFF2 works well")

if __name__ == "__main__":
    main()
