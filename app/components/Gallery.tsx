"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type GalleryImage = {
  id: number;
  imageUrl: string;
};

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(
          "https://dinoparkwebshop-backend-1081514700612.us-central1.run.app/api/Gallery/paged?page=1&pageSize=12"
        );
        const data = await res.json();
        setImages(data.images);
      } catch (error) {
        console.error("Greška pri učitavanju galerije:", error);
      }
    };

    fetchGallery();
  }, []);

  return (
    <section id="gallery-preview" className="py-10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {images.map((image) => (
            <Link key={image.id} href="/gallery">
              <div className="relative w-full aspect-square cursor-pointer hover:opacity-80 transition">
                <Image
                  src={image.imageUrl}
                  alt={`Galerija slika ${image.id}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-sm"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
