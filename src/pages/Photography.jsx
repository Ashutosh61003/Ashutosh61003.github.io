import React, { useEffect, useRef, useState } from 'react';
import { Camera, Maximize2, MapPin, X, Aperture, Timer, Zap, Image as ImageIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Photography.css';

gsap.registerPlugin(ScrollTrigger);

const Photography = () => {
    const gridRef = useRef(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const modalRef = useRef(null);

    const photos = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
            title: 'Code Logic',
            location: 'VS Code, MacOS',
            description: 'Capturing the essence of algorithms in motion. A snapshot of clear thoughts translated into syntax.',
            exif: { camera: 'Leica Q2', aperture: 'f/1.8', iso: '200', shutter: '1/60s' }
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80',
            title: 'Cyber Security',
            location: 'Server Room A1',
            description: 'The silent guardians of data. Rows of servers humming with the collective knowledge of the network.',
            exif: { camera: 'Sony A7III', aperture: 'f/2.8', iso: '800', shutter: '1/120s' }
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
            title: 'Hardware',
            location: 'Motherboard',
            description: 'Silicon cities. The microscopic architecture that powers our digital existence.',
            exif: { camera: 'Canon R5', aperture: 'f/4.0', iso: '100', shutter: '1/200s' }
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=1600&q=80',
            title: 'Matrix',
            location: 'Digital Space',
            description: 'Navigating the infinite grid. A visual representation of potential and structured chaos.',
            exif: { camera: 'Fujifilm X-T4', aperture: 'f/1.4', iso: '400', shutter: '1/45s' }
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1607799275518-d6c356a1b553?auto=format&fit=crop&w=1600&q=80',
            title: 'Neural Net',
            location: 'AI Lab',
            description: 'Nodes and connections. Visualizing the pathways of machine learning models.',
            exif: { camera: 'Leica M10', aperture: 'f/2.0', iso: '1600', shutter: '1/500s' }
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
            title: 'Mobile Dev',
            location: 'App Flow',
            description: 'Designing for touch. The intersection of human gesture and digital response.',
            exif: { camera: 'iPhone 15 Pro', aperture: 'f/1.6', iso: '50', shutter: '1/1000s' }
        },
        {
            id: 7,
            url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
            title: 'Hacker',
            location: 'Terminal',
            description: 'The green glow of access. Penetrating systems and exploring the depths of the OS.',
            exif: { camera: 'Sony A7SIII', aperture: 'f/1.2', iso: '3200', shutter: '1/60s' }
        },
        {
            id: 8,
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
            title: 'Analytics',
            location: 'Dashboard',
            description: 'Data storytelling. Turning raw numbers into visual narratives that drive decisions.',
            exif: { camera: 'Nikon Z6', aperture: 'f/5.6', iso: '200', shutter: '1/160s' }
        }
    ];

    // Entrance Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".photo-card", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%"
                }
            });

            // 3D Tilt Logic
            const items = document.querySelectorAll('.photo-card');
            items.forEach(item => {
                item.addEventListener('mousemove', (e) => {
                    const rect = item.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(item, {
                        rotationY: x / 15,
                        rotationX: -y / 15,
                        transformPerspective: 1000,
                        scale: 1.02,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                item.addEventListener('mouseleave', () => {
                    gsap.to(item, {
                        rotationY: 0,
                        rotationX: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "elastic.out(1, 0.5)"
                    });
                });
            });

        }, gridRef);

        return () => ctx.revert();
    }, []);

    // Modal Animation
    useEffect(() => {
        if (selectedPhoto) {
            document.body.style.overflow = 'hidden';

            // Animate In
            const ctx = gsap.context(() => {
                gsap.fromTo(".modal-overlay",
                    { opacity: 0 },
                    { opacity: 1, duration: 0.4, ease: "power2.out" }
                );
                gsap.fromTo(".modal-content",
                    { y: 50, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.2)", delay: 0.1 }
                );
                gsap.fromTo(".modal-info-item",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, delay: 0.3 }
                );
            }, modalRef);
            return () => ctx.revert();

        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedPhoto]);

    const handleClose = () => {
        // Simple close for now, could add exit animation
        setSelectedPhoto(null);
    };

    return (
        <div className="page-container photo-page">
            <div className="container photo-grid" ref={gridRef} style={{ paddingTop: '120px' }}>
                {photos.map((p) => (
                    <div key={p.id} className="photo-card tilt-card" onClick={() => setSelectedPhoto(p)}>
                        <div className="photo-inner">
                            <img src={p.url} alt={p.title} className="photo-img" />
                            <div className="photo-overlay">
                                <div className="overlay-content">
                                    <div className="photo-meta">
                                        <span className="photo-chip">{p.title}</span>
                                        <div className="photo-location">
                                            <MapPin size={12} /> {p.location}
                                        </div>
                                    </div>
                                    <button className="btn-expand">
                                        <Maximize2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPhoto && (
                <div className="modal-overlay" onClick={handleClose} ref={modalRef}>
                    <button className="btn-close">
                        <X size={24} />
                    </button>

                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-image-col">
                            <img src={selectedPhoto.url} alt={selectedPhoto.title} />
                        </div>

                        <div className="modal-details-col">
                            <div className="modal-header modal-info-item">
                                <h2>{selectedPhoto.title}</h2>
                                <p className="modal-location"><MapPin size={14} /> {selectedPhoto.location}</p>
                            </div>

                            <p className="modal-desc modal-info-item">
                                {selectedPhoto.description}
                            </p>

                            <div className="modal-stats modal-info-item">
                                <div className="stat-box">
                                    <Camera size={18} className="stat-icon" />
                                    <span className="stat-label">Camera</span>
                                    <span className="stat-val">{selectedPhoto.exif.camera}</span>
                                </div>
                                <div className="stat-box">
                                    <Aperture size={18} className="stat-icon" />
                                    <span className="stat-label">Aperture</span>
                                    <span className="stat-val">{selectedPhoto.exif.aperture}</span>
                                </div>
                                <div className="stat-box">
                                    <Zap size={18} className="stat-icon" />
                                    <span className="stat-label">ISO</span>
                                    <span className="stat-val">{selectedPhoto.exif.iso}</span>
                                </div>
                                <div className="stat-box">
                                    <Timer size={18} className="stat-icon" />
                                    <span className="stat-label">Shutter</span>
                                    <span className="stat-val">{selectedPhoto.exif.shutter}</span>
                                </div>
                            </div>

                            <div className="modal-footer modal-info-item">
                                <span className="tag">#Photography</span>
                                <span className="tag">#Tech</span>
                                <span className="tag">#4K</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photography;
