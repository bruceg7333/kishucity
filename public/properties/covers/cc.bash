#!/bin/bash

# Directory containing the images
DIR="./"

# Check if directory exists
if [ ! -d "$DIR" ]; then
    echo "Directory $DIR does not exist."
    exit 1
fi

# Change to the directory
cd "$DIR" || exit

# Loop through all files starting with "图片"
for file in 图片*.*; do
    # Skip if no files found
    [ -e "$file" ] || continue
    
    # Extract the number and extension
    if [[ $file =~ 图片([0-9]+)(\..+)$ ]]; then
        number="${BASH_REMATCH[1]}"
        extension="${BASH_REMATCH[2]}"
        
        # New filename
        new_name="image${number}${extension}"
        
        # Rename the file
        mv -v "$file" "$new_name"
    fi
done

echo "Renaming complete."
