import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

interface Certificate {
  id: number;
  image: string;
}

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    { id: 1, image: "certificate1.png" },
    { id: 2, image: "certificate2.png" },
    { id: 3, image: "certificate3.png" },
    { id: 4, image: "certificate4.png" },
    { id: 5, image: "certificate5.png" },
    { id: 6, image: "certificate6.png" },
    { id: 7, image: "certificate7.png" },
    { id: 8, image: "certificate8.png" },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-glow-cyan mb-4"
            style={{ fontFamily: "'Playfair Display','Georgia',serif" }}
          >
            Certifications
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* CERTIFICATE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer transition hover:scale-105"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="h-72 flex items-center justify-center bg-black/5">
                <img
                  src={cert.image}
                  alt="Certificate"
                  className="max-h-full max-w-full object-contain p-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL VIEW */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto">
          <div className="flex justify-center items-center">
            <img
              src={selectedCert?.image}
              alt="Certificate"
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
