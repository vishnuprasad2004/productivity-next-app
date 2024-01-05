"use client"

export default function PDFReader() {
    return (
        <>

            <iframe
                src={'public/pdf1.pdf'}
                width="100%"
                height="500px"
                // frameBorder="0"
                // scrolling="auto"
                allowFullScreen
                title="PDF Viewer"
            ></iframe>


        </>

    )
}