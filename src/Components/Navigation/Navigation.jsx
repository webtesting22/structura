import React, { useState, useEffect } from "react";
import { Button, Drawer } from 'antd';
import "./navigation.css"
const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    };
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };
    return (
        <>
            <header className={`structuranavigationContainer ${isScrolled ? 'scrolled' : ''}`}>
                <div className="inside-header-container">
                    <div style={{ display: "flex", alignItems: "center" }}><h2 className="logo">Structura</h2></div>
                    <div>
                        <button type="primary" className="PrimaryBlackBtn" onClick={showDrawer}>
                            Menu
                        </button>
                    </div>
                </div>
            </header>

            <Drawer title={
                <div className="HeaderEdit">
                    <span>Multi-level drawer</span>
                    <button type="text" onClick={onClose}>Close</button>
                </div>
            }
                width={520} closable={false} onClose={onClose} open={open}>
                <Button type="primary" onClick={showChildrenDrawer}>
                    Two-level drawer
                </Button>
                <Drawer
                    title="Two-level Drawer"
                    width={320}
                    closable={false}
                    onClose={onChildrenDrawerClose}
                    open={childrenDrawer}
                >
                    This is two-level drawer
                </Drawer>
            </Drawer>
        </>
    )
}

export default Navigation