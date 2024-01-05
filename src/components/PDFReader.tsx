"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function PDFReader() {
    return(
        // <Card 
        //     className="p-2"    
        // >
        //     <CardHeader>
                
        //     </CardHeader>
        //     <CardBody>
        //         {/* <embed src="C:\Users\vishnu\Desktop\Studies\DBMS CLASS Notes.pdf" type="application/pdf" width="250" height={400}/> */}
        //     </CardBody>
        // </Card>
                <iframe src="C:\Users\vishnu\Desktop\Studies\Operating System Notes (1) (1).pdf" width="100%" height="100%" className="w-full h-full"></iframe>
    )
}