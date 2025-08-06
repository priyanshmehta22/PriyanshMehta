import mammoth from 'mammoth';

export const parseDOCX = async (docxPath) => {
    console.log("DOCX Parser called with path:", docxPath);
    try {
        // Read the DOCX file
        const response = await fetch(docxPath);
        const arrayBuffer = await response.arrayBuffer();

        // Extract text using mammoth
        const result = await mammoth.extractRawText({ arrayBuffer });

        console.log("DOCX text extracted, length:", result.value.length);
        console.log(result.value);
        return result.value;
    } catch (error) {
        console.error("Error parsing DOCX:", error);
        throw error;
    }
}; 