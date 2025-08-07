import mammoth from 'mammoth';

export const parseDOCX = async (docxPath) => {

    try {
        // Read the DOCX file
        const response = await fetch(docxPath);
        const arrayBuffer = await response.arrayBuffer();

        // Extract text using mammoth
        const result = await mammoth.extractRawText({ arrayBuffer });


        return result.value;
    } catch (error) {
        console.error("Error parsing DOCX:", error);
        throw error;
    }
}; 