/**
 * VibeRTE - Advanced Rich Text Editor
 * A fully-featured WYSIWYG editor with extensive formatting options
 * Version 1.0.0
 * Includes: Core Editor + Extensions + Icons
 */

(function(window) {
    'use strict';

    // SVG Icons Library
    const VibeIcons = {
        file: {
            new: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
            preview: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
            exportPDF: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
            exportDOCX: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`,
            exportHTML: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
            exportImage: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
            importHTML: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
            print: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`
        },
        edit: {
            undo: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"/></svg>`,
            redo: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"/></svg>`,
            cut: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
            copy: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
            paste: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
            find: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`
        },
        format: {
            bold: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6zm0 8h9a4 4 0 014 4 4 4 0 01-4 4H6z"/></svg>`,
            italic: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4h10v4h-3l-4 8h3v4H6v-4h3l4-8H10V4z"/></svg>`,
            underline: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3v8a6 6 0 0012 0V3h-2v8a4 4 0 01-8 0V3H6zm0 18h12v2H6v-2z"/></svg>`,
            strikethrough: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h18v2H3v-2zm6-6h6a3 3 0 013 3v1h-2V9a1 1 0 00-1-1H9a1 1 0 00-1 1v1H6V9a3 3 0 013-3zm6 12a1 1 0 001-1v-1h2v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1h2v1a1 1 0 001 1h6z"/></svg>`,
            superscript: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 7h4v1h-3v1h3v1h-4V7zM5 7l4 5-4 5h2l4-5-4-5H5z"/></svg>`,
            subscript: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 17h4v1h-3v1h3v1h-4v-3zM5 7l4 5-4 5h2l4-5-4-5H5z"/></svg>`,
            code: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
            justifyLeft: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm0 4h12v2H3V9zm0 4h18v2H3v-2zm0 4h12v2H3v-2z"/></svg>`,
            justifyCenter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm3 4h12v2H6V9zm-3 4h18v2H3v-2zm3 4h12v2H6v-2z"/></svg>`,
            justifyRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm6 4h12v2H9V9zm-6 4h18v2H3v-2zm6 4h12v2H9v-2z"/></svg>`,
            justifyFull: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm0 4h18v2H3V9zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/></svg>`,
            listBullet: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h2v2H4V6zm4 1h12v1H8V7zM4 11h2v2H4v-2zm4 1h12v1H8v-1zm-4 4h2v2H4v-2zm4 1h12v1H8v-1z"/></svg>`,
            listNumber: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h2v4H3V4zm0 6h2v1H4v1h1v1H3v-3zm0 5h1.8L3 17.1v.9h2v-1H3.2l1.8-2.1V14H3v1zm5-9h12v1H8V6zm0 5h12v1H8v-1zm0 5h12v1H8v-1z"/></svg>`,
            indent: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm0 4v6l4-3-4-3zm6 2h12v2H9v-2zm0 4h12v2H9v-2zM3 19h18v2H3v-2z"/></svg>`,
            outdent: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm4 4v6l-4-3 4-3zm2 2h12v2H9v-2zm0 4h12v2H9v-2zM3 19h18v2H3v-2z"/></svg>`,
            textColor: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><g fill-rule="evenodd"><path class="color-indicator" d="M3 18h18v3H3z" fill="currentColor"/><path d="M8.7 16h-.8a.5.5 0 01-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9c.1.3-.1.6-.5.6h-.8c-.2 0-.4-.1-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2c-.1.3.1.6.5.6h1.6c.4 0 .6-.3.5-.6l-.6-2c-.1-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"/></g></svg>`,
            bgColor: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><g fill-rule="evenodd"><path class="color-indicator" d="M3 18h18v3H3z" fill="currentColor"/><path fill-rule="nonzero" d="M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6"/></g></svg>`,
            clearFormat: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6zm14 14l-1.41-1.41L5.41 4.41 4 5.82l6.18 6.18L8 17h3l1.39-3.28 6.89 6.89L20 19z"/></svg>`,
            formatPainter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 5V4c0-.5-.4-1-1-1H5a1 1 0 00-1 1v4c0 .6.5 1 1 1h12c.6 0 1-.4 1-1V7h1v4H9v9c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-7h8V5h-3z"/></svg>`,
            lineHeight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 5a1 1 0 01.1 2H13a1 1 0 01-.1-2h8zm0 4a1 1 0 01.1 2H13a1 1 0 01-.1-2h8zm0 4a1 1 0 01.1 2H13a1 1 0 01-.1-2h8zm0 4a1 1 0 01.1 2H13a1 1 0 01-.1-2h8zM7 3.6l3.7 3.7a1 1 0 01-1.3 1.5h-.1L8 7.3v9.2l1.3-1.3a1 1 0 011.3 0h.1c.4.4.4 1 0 1.3v.1L7 20.4l-3.7-3.7a1 1 0 011.3-1.5h.1L6 16.7V7.4L4.7 8.7a1 1 0 01-1.3 0h-.1a1 1 0 010-1.3v-.1L7 3.6z"/></svg>`
        },
        insert: {
            image: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
            link: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
            video: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
            table: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
            hr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/></svg>`,
            emoji: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
            specialChar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15 18h4l1-2v4h-6v-3.3l1.4-1a6 6 0 001.8-2.9 6.3 6.3 0 00-.1-4.1 5.8 5.8 0 00-3-3.2c-.6-.3-1.3-.5-2.1-.5a5.1 5.1 0 00-3.9 1.8 6.3 6.3 0 00-1.3 6 6.2 6.2 0 001.8 3l1.4.9V20H4v-4l1 2h4v-.5l-2-1L5.4 15A6.5 6.5 0 014 11c0-1 .2-1.9.6-2.7A7 7 0 016.3 6C7.1 5.4 8 5 9 4.5c1-.3 2-.5 3.1-.5a8.8 8.8 0 015.7 2 7 7 0 011.7 2.3 6 6 0 01.2 4.8c-.2.7-.6 1.3-1 1.9a7.6 7.6 0 01-3.6 2.5v.5z"/></svg>`,
            math: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 4.8c.1-.5.5-.8 1-.8h10a1 1 0 110 2h-9.2L8.3 19.2a1 1 0 01-1.7.4l-3.4-4.2a1 1 0 011.6-1.2l2 2.5L9 4.8zm9.7 5.5c.4.4.4 1 0 1.4L17 13.5l1.8 1.8a1 1 0 11-1.4 1.4L15.5 15l-1.8 1.8a1 1 0 01-1.4-1.4l1.8-1.8-1.8-1.8a1 1 0 011.4-1.4l1.8 1.8 1.8-1.8a1 1 0 011.4 0z"/></svg>`,
            media: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
            iframe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6V5H5v14h2A13 13 0 0119 6zm0 1.4c-.8.8-1.6 2.4-2.2 4.6H19V7.4zm0 5.6h-2.4c-.4 1.8-.6 3.8-.6 6h3v-6zm-4 6c0-2.2.2-4.2.6-6H13c-.7 1.8-1.1 3.8-1.1 6h3zm-4 0c0-2.2.4-4.2 1-6H9.6A12 12 0 008 19h3zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm11.8 9c.4-1.9 1-3.4 1.8-4.5a9.2 9.2 0 00-4 4.5h2.2zm-3.4 0a12 12 0 012.8-4 12 12 0 00-5 4h2.2z"/></svg>`,
            anchor: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4v17l6-4 6 4V4c0-.6-.4-1-1-1H7a1 1 0 00-1 1z"/></svg>`,
            pageBreak: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><g fill-rule="evenodd"><path d="M5 11c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 010-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 010-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1h-1a1 1 0 010-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 010-2zM7 3v5h10V3c0-.6.4-1 1-1s1 .4 1 1v7H5V3c0-.6.4-1 1-1s1 .4 1 1zM6 22a1 1 0 01-1-1v-7h14v7c0 .6-.4 1-1 1a1 1 0 01-1-1v-5H7v5c0 .6-.4 1-1 1z"/></g></svg>`,
            codeSample: `<svg width="18" height="18" viewBox="0 0 24 26" fill="currentColor"><path d="M7.1 11a2.8 2.8 0 01-.8 2 2.8 2.8 0 01.8 2v1.7c0 .3.1.6.4.8.2.3.5.4.8.4.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.7 0-1.4-.3-2-.8-.5-.6-.8-1.3-.8-2V15c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 01-.4-.4v-.8c0-.2.2-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V9.3c0-.7.3-1.4.8-2 .6-.5 1.3-.8 2-.8.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8V11zm9.8 0V9.3c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 01-.4-.4V7c0-.2.1-.4.4-.4.7 0 1.4.3 2 .8.5.6.8 1.3.8 2V11c0 .3.1.6.4.8.2.3.5.4.8.4.2 0 .4.2.4.4v.8c0 .2-.2.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8v1.7c0 .7-.3 1.4-.8 2-.6.5-1.3.8-2 .8a.4.4 0 01-.4-.4v-.8c0-.2.1-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V15a2.8 2.8 0 01.8-2 2.8 2.8 0 01-.8-2zm-3.3-.4c0 .4-.1.8-.5 1.1-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1 0-.5.1-.9.5-1.2.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4.4.3.5.7.5 1.2zM12 13c.4 0 .8.1 1.1.5.4.3.5.7.5 1.1 0 1-.1 1.6-.5 2a3 3 0 01-1.1 1c-.4.3-.8.4-1.1.4a.5.5 0 01-.5-.5V17a3 3 0 001-.2l.6-.6c-.6 0-1-.2-1.3-.5-.2-.3-.3-.7-.3-1 0-.5.1-1 .5-1.2.3-.4.7-.5 1.1-.5z"/></svg>`,
            footnote: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2h14z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19 4v6h-1V5h-1.5V4h2.6z"/><path d="M12 18c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2h7zM14 8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2h9z"/></svg>`,
            template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19v-1H5v1h14zM9 16v-4a5 5 0 116 0v4h4a2 2 0 012 2v3H3v-3c0-1.1.9-2 2-2h4zm4 0v-5l.8-.6a3 3 0 10-3.6 0l.8.6v5h2z"/></svg>`,
            mergeTag: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 5a2 2 0 011.6.8L21 12l-4.4 6.2a2 2 0 01-1.6.8h-3v-2h3l3.5-5L15 7H5v3H3V7c0-1.1.9-2 2-2h10z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 12a1 1 0 00-1 1v2H3a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2H7v-2c0-.6-.4-1-1-1z"/></svg>`,
            checklist: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8a1 1 0 010 2h-8a1 1 0 010-2zM7.2 16c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 20c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 010-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 14c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 010-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 8c-.2.3-.7.4-1 0L3.8 6.9a.7.7 0 010-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8z"/></svg>`
        },
        
        view: {
            sourceCode: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
            fullscreen: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>`,
            spellcheck: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 8v3H5V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h2c.3 0 .5.1.7.3.2.2.3.4.3.7v6H8V8H6zm0-3v2h2V5H6zm13 0h-3v5h3v1h-3a1 1 0 01-.7-.3 1 1 0 01-.3-.7V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3v1zm-5 1.5l-.1.7c-.1.2-.3.3-.6.3.3 0 .5.1.6.3l.1.7V10c0 .3-.1.5-.3.7a1 1 0 01-.7.3h-3V4h3c.3 0 .5.1.7.3.2.2.3.4.3.7v1.5zM13 10V8h-2v2h2zm0-3V5h-2v2h2zm3 5l1 1-6.5 7L7 15.5l1.3-1 2.2 2.2L16 12z"/></svg>`,
            showBlocks: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
            preview: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 002.1-2.8 15.7 15.7 0 00-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 00-6.7 3.2A16.2 16.2 0 003.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 012.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 01-2.8-3.7 1 1 0 010-1zm12-3.3a2 2 0 102.7 2.6 4 4 0 11-2.6-2.6z"/></svg>`
        }
    };

    // Emoji/Character alternatives
    const EmojiIcons = {
        file: { new: '📄', preview: '👁️', exportPDF: '📕', exportDOCX: '📘', exportHTML: '🌐', exportImage: '🖼️', importHTML: '📥', importDOCX: '📥', print: '🖨️' },
        edit: { undo: '↶', redo: '↷', cut: '✂️', copy: '📋', paste: '📄', find: '🔍' },
        format: { bold: 'B', italic: 'I', underline: 'U', strikethrough: 'S', superscript: 'x²', subscript: 'x₂', code: '<>', justifyLeft: '≣', justifyCenter: '≡', justifyRight: '≣', justifyFull: '≣', listBullet: '•', listNumber: '1.', indent: '→', outdent: '←', textColor: '🎨', bgColor: '🖌️', clearFormat: '🧹', formatPainter: '🖌️', lineHeight: '⇅' },
        insert: { image: '🖼️', link: '🔗', video: '🎥', table: '⊞', hr: '―', emoji: '😀', specialChar: '©', math: '∑', media: '📹', iframe: '🪟', anchor: '⚓', pageBreak: '⤶', codeSample: '</>', footnote: '¹', template: '📋', mergeTag: '🏷️', checklist: '☑️' },
        view: { sourceCode: '<>', fullscreen: '⛶', spellcheck: '✓', showBlocks: '▢', preview: '👁️' }
    };


    // Extension Functions
    const VibeRTEExtensions = {
        icons: VibeIcons,
        emojiIcons: EmojiIcons,
        useEmojiIcons: false,
        
        exportPDF: function(editor) {
            if (typeof window.jspdf === 'undefined') {
                alert('jsPDF library required. Include:\n<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>');
                return;
            }
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const content = editor.textContent || editor.innerText;
            const lines = doc.splitTextToSize(content, 180);
            doc.setFontSize(12);
            doc.text(lines, 15, 15);
            doc.save('document.pdf');
        },

        exportDOCX: function(editor) {
            if (typeof window.docx === 'undefined') {
                alert('docx library required. Include:\n<script src="https://cdnjs.cloudflare.com/ajax/libs/docx/7.8.2/docx.min.js"></script>');
                return;
            }
            const { Document, Packer, Paragraph, TextRun } = window.docx;
            const content = editor.innerHTML;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content;
            const paragraphs = [];
            const elements = tempDiv.querySelectorAll('p, h1, h2, h3, h4, h5, h6, div');
            elements.forEach(el => {
                const text = el.textContent;
                const isBold = el.querySelector('strong, b') !== null;
                const isItalic = el.querySelector('em, i') !== null;
                let fontSize = 24;
                if (el.tagName === 'H1') fontSize = 48;
                else if (el.tagName === 'H2') fontSize = 36;
                else if (el.tagName === 'H3') fontSize = 32;
                paragraphs.push(new Paragraph({
                    children: [new TextRun({ text: text, bold: isBold, italics: isItalic, size: fontSize })]
                }));
            });
            const doc = new Document({ sections: [{ properties: {}, children: paragraphs }] });
            Packer.toBlob(doc).then(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'document.docx';
                a.click();
                URL.revokeObjectURL(url);
            });
        },

        exportImage: function(editor) {
            if (typeof window.html2canvas === 'undefined') {
                alert('html2canvas library required. Include:\n<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>');
                return;
            }
            const clone = editor.cloneNode(true);
            clone.style.cssText = 'position:absolute;left:-9999px;width:800px;padding:40px;background:white;font-family:Arial;font-size:16px;line-height:1.6;';
            document.body.appendChild(clone);
            html2canvas(clone, { backgroundColor: '#ffffff', scale: 2 }).then(canvas => {
                canvas.toBlob(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'document.png';
                    a.click();
                    URL.revokeObjectURL(url);
                });
                document.body.removeChild(clone);
            });
        },

        importDOCX: function(editor) {
            if (typeof window.mammoth === 'undefined') {
                alert('mammoth library required. Include:\n<script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js"></script>');
                return;
            }
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.docx';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (event) => {
                    mammoth.convertToHtml({ arrayBuffer: event.target.result })
                        .then(result => { editor.innerHTML = result.value; });
                };
                reader.readAsArrayBuffer(file);
            };
            input.click();
        }
    };

    // Expose extensions
    window.VibeRTEExtensions = VibeRTEExtensions;
    window.VibeIcons = VibeIcons;

    class VibeRTE {
        constructor(selector, options = {}) {
            this.version = '1.0.0';
            this.selector = selector;
            this.elements = typeof selector === 'string' 
                ? document.querySelectorAll(selector) 
                : [selector];
            
            this.defaults = {
                height: '500px',
                width: '100%',
                placeholder: 'Start typing...',
                toolbar: 'full',
                menubar: true,
                statusbar: true,
                autosave: false,
                autosaveInterval: 30000,
                spellcheck: true,
                fontFamily: ['Arial', 'Georgia', 'Times New Roman', 'Courier New', 'Verdana', 'Helvetica'],
                fontSize: ['8px', '10px', '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'],
                lineHeight: ['1', '1.15', '1.5', '2', '2.5', '3'],
                onChange: null,
                onInit: null,
                theme: 'light'
            };
            
            this.options = { ...this.defaults, ...options };
            this.instances = [];
            this.init();
        }

        init() {
            this.elements.forEach(element => {
                const instance = this.createEditor(element);
                this.instances.push(instance);
            });
            
            if (this.options.onInit) {
                this.options.onInit(this);
            }
        }

        createEditor(textarea) {
            const originalContent = textarea.value;
            textarea.style.display = 'none';
            
            const wrapper = document.createElement('div');
            wrapper.className = 'vibrte-wrapper';
            wrapper.setAttribute('data-theme', this.options.theme || 'default');
            wrapper.style.cssText = `
                border-radius: 8px;
                background: #fff;
                width: ${this.options.width};
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            `;

            if (this.options.menubar) {
                const menubar = this.createMenubar();
                wrapper.appendChild(menubar);
            }

            const toolbar = this.createToolbar();
            wrapper.appendChild(toolbar);

            const editorArea = document.createElement('div');
            editorArea.className = 'vibrte-editor';
            editorArea.contentEditable = true;
            editorArea.spellcheck = this.options.spellcheck;
            editorArea.innerHTML = originalContent;
            editorArea.style.cssText = `
                min-height: ${this.options.height};
                padding: 20px;
                outline: none;
                font-size: 16px;
                line-height: 1.6;
                overflow-y: auto;
                max-height: 800px;
                background: #fff;
            `;

            if (!originalContent) {
                editorArea.setAttribute('data-placeholder', this.options.placeholder);
            }

            wrapper.appendChild(editorArea);

            if (this.options.statusbar) {
                const statusbar = this.createStatusbar();
                wrapper.appendChild(statusbar);
            }

            textarea.parentNode.insertBefore(wrapper, textarea.nextSibling);

            const instance = {
                textarea: textarea,
                wrapper: wrapper,
                editor: editorArea,
                toolbar: toolbar,
                menubar: this.options.menubar ? wrapper.querySelector('.vibrte-menubar') : null,
                statusbar: this.options.statusbar ? wrapper.querySelector('.vibrte-statusbar') : null,
                isFullscreen: false,
                isSourceView: false
            };

            this.setupEventListeners(instance);
            
            if (this.options.autosave) {
                this.setupAutosave(instance);
            }

            return instance;
        }

        applyIconsToInstance(instance) {
            if (typeof window.VibeIcons === 'undefined') return;

            // Apply icons to menu items
            const menuOptions = instance.wrapper.querySelectorAll('.vibrte-menu-option span:first-child');
            menuOptions.forEach(span => {
                const text = span.textContent.trim();
                // Check each category for matching icon
                for (const category in window.VibeIcons) {
                    for (const iconKey in window.VibeIcons[category]) {
                        if (text.toLowerCase().includes(iconKey.toLowerCase()) || 
                            this.matchIconToText(text, iconKey)) {
                            const svgIcon = window.VibeIcons[category][iconKey];
                            span.innerHTML = `${svgIcon} <span style="margin-left: 6px;">${text.split(' ').slice(1).join(' ') || text}</span>`;
                            break;
                        }
                    }
                }
            });
        }

        matchIconToText(text, iconKey) {
            const matches = {
                'new': ['new document'],
                'preview': ['preview'],
                'exportPDF': ['pdf'],
                'exportDOCX': ['docx', 'doc'],
                'exportHTML': ['html'],
                'exportImage': ['image', 'convert'],
                'importHTML': ['import html'],
                'importDOCX': ['import docx'],
                'print': ['print'],
                'undo': ['undo'],
                'redo': ['redo'],
                'cut': ['cut'],
                'copy': ['copy'],
                'paste': ['paste'],
                'find': ['find'],
                'replace': ['replace'],
                'bold': ['bold'],
                'italic': ['italic'],
                'underline': ['underline'],
                'strikethrough': ['strikethrough'],
                'link': ['link'],
                'image': ['image'],
                'table': ['table'],
                'video': ['video']
            };

            const textLower = text.toLowerCase();
            if (matches[iconKey]) {
                return matches[iconKey].some(keyword => textLower.includes(keyword));
            }
            return false;
        }

        createMenubar() {
            const menubar = document.createElement('div');
            menubar.className = 'vibrte-menubar';
            menubar.style.cssText = `
                display: flex;
                background: #f5f5f5;
                border-bottom: 1px solid #e0e0e0;
                padding: 5px 10px;
                font-size: 14px;
            `;

            const menus = {
                'File': ['new', 'preview', 'exportPDF', 'exportDOCX', 'exportHTML', 'exportImage', 'importHTML', 'importDOCX', 'print'],
                'Edit': ['undo', 'redo', 'cut', 'copy', 'paste', 'pasteText', 'selectAll', 'find', 'findReplace'],
                'View': ['sourceCode', 'spellcheck', 'showBlocks', 'preview', 'fullscreen', 'toggleIcons'],
                'Insert': ['image', 'link', 'video', 'iframe', 'codeSample', 'table', 'math', 'specialChars', 'emoji', 'hr', 'pageBreak', 'nbsp', 'toc'],
                'Format': ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'code', 'headings', 'blocks', 'align', 'fontFamily', 'fontSize', 'lineHeight', 'textColor', 'bgColor', 'clearFormat']
            };

            Object.keys(menus).forEach(menuName => {
                const menuItem = document.createElement('div');
                menuItem.className = 'vibrte-menu-item';
                menuItem.style.cssText = `
                    position: relative;
                    padding: 8px 15px;
                    cursor: pointer;
                    user-select: none;
                `;
                menuItem.textContent = menuName;

                const dropdown = this.createMenuDropdown(menus[menuName]);
                menuItem.appendChild(dropdown);

                menuItem.addEventListener('mouseenter', () => {
                    dropdown.style.display = 'block';
                });

                menuItem.addEventListener('mouseleave', () => {
                    dropdown.style.display = 'none';
                });

                menubar.appendChild(menuItem);
            });

            return menubar;
        }

        createMenuDropdown(items) {
            const dropdown = document.createElement('div');
            dropdown.className = 'vibrte-dropdown';
            dropdown.style.cssText = `
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                min-width: 200px;
                z-index: 1000;
                padding: 5px 0;
            `;

            const menuActions = {
                'new': { label: 'New', icon: '📄', action: 'newDoc', key: 'new' },
                'preview': { label: 'Preview', icon: '👁️', action: 'preview', key: 'preview' },
                'exportPDF': { label: 'Export to PDF', icon: '📕', action: 'exportPDF', key: 'exportPDF' },
                'exportDOCX': { label: 'Export to DOCX', icon: '📘', action: 'exportDOCX', key: 'exportDOCX' },
                'exportHTML': { label: 'Export to HTML', icon: '🌐', action: 'exportHTML', key: 'exportHTML' },
                'exportImage': { label: 'Convert to Image', icon: '🖼️', action: 'exportImage', key: 'exportImage' },
                'importHTML': { label: 'Import HTML', icon: '📥', action: 'importHTML', key: 'importHTML' },
                'importDOCX': { label: 'Import DOCX', icon: '📥', action: 'importDOCX', key: 'importDOCX' },
                'print': { label: 'Print', icon: '🖨️', action: 'print', key: 'print' },
                'undo': { label: 'Undo', icon: '↶', action: 'undo', shortcut: 'Ctrl+Z', key: 'undo' },
                'redo': { label: 'Redo', icon: '↷', action: 'redo', shortcut: 'Ctrl+Y', key: 'redo' },
                'cut': { label: 'Cut', icon: '✂️', action: 'cut', shortcut: 'Ctrl+X', key: 'cut' },
                'copy': { label: 'Copy', icon: '📋', action: 'copy', shortcut: 'Ctrl+C', key: 'copy' },
                'paste': { label: 'Paste', icon: '📄', action: 'paste', shortcut: 'Ctrl+V', key: 'paste' },
                'pasteText': { label: 'Paste as Text', icon: '📃', action: 'pasteText', key: 'pasteText' },
                'selectAll': { label: 'Select All', icon: '☑️', action: 'selectAll', shortcut: 'Ctrl+A', key: 'selectAll' },
                'find': { label: 'Find', icon: '🔍', action: 'find', shortcut: 'Ctrl+F', key: 'find' },
                'findReplace': { label: 'Find & Replace', icon: '🔄', action: 'findReplace', shortcut: 'Ctrl+H', key: 'findReplace' },
                'sourceCode': { label: 'View Source', icon: '<>', action: 'viewSource', key: 'sourceCode' },
                'spellcheck': { label: 'Spell Check', icon: '✓', action: 'toggleSpellcheck', key: 'spellcheck' },
                'showBlocks': { label: 'Show Blocks', icon: '▢', action: 'showBlocks', key: 'showBlocks' },
                'fullscreen': { label: 'Fullscreen', icon: '⛶', action: 'fullscreen', key: 'fullscreen' },
                'toggleIcons': { label: 'Toggle Emoji Icons', icon: '🔄', action: 'toggleIconMode', key: 'toggleIcons' },
                'image': { label: 'Image', icon: '🖼️', action: 'insertImage', key: 'image' },
                'link': { label: 'Link', icon: '🔗', action: 'createLink', key: 'link' },
                'video': { label: 'Video', icon: '🎥', action: 'insertVideo', key: 'video' },
                'iframe': { label: 'iFrame', icon: '🪟', action: 'insertIframe', key: 'iframe' },
                'codeSample': { label: 'Code Sample', icon: '</>', action: 'insertCode', key: 'codeSample' },
                'table': { label: 'Table', icon: '⊞', action: 'insertTable', key: 'table' },
                'math': { label: 'Math Formula', icon: '∑', action: 'insertMath', key: 'math' },
                'specialChars': { label: 'Special Characters', icon: '©', action: 'insertSpecialChar', key: 'specialChars' },
                'emoji': { label: 'Emoji', icon: '😀', action: 'insertEmoji', key: 'emoji' },
                'hr': { label: 'Horizontal Line', icon: '―', action: 'insertHR', key: 'hr' },
                'pageBreak': { label: 'Page Break', icon: '⤶', action: 'insertPageBreak', key: 'pageBreak' },
                'nbsp': { label: 'Non-Breaking Space', icon: '␣', action: 'insertNBSP', key: 'nbsp' },
                'toc': { label: 'Table of Contents', icon: '📑', action: 'insertTOC', key: 'toc' },
                'bold': { label: 'Bold', icon: 'B', action: 'bold', shortcut: 'Ctrl+B', key: 'bold' },
                'italic': { label: 'Italic', icon: 'I', action: 'italic', shortcut: 'Ctrl+I', key: 'italic' },
                'underline': { label: 'Underline', icon: 'U', action: 'underline', shortcut: 'Ctrl+U', key: 'underline' },
                'strikethrough': { label: 'Strikethrough', icon: 'S', action: 'strikethrough', key: 'strikethrough' },
                'superscript': { label: 'Superscript', icon: 'x²', action: 'superscript', key: 'superscript' },
                'subscript': { label: 'Subscript', icon: 'x₂', action: 'subscript', key: 'subscript' },
                'code': { label: 'Inline Code', icon: 'code', action: 'inlineCode', key: 'code' },
                'headings': { label: 'Headings', icon: 'H', action: 'showHeadings', submenu: true, key: 'headings' },
                'blocks': { label: 'Blocks', icon: '¶', action: 'showBlocks', submenu: true, key: 'blocks' },
                'align': { label: 'Alignment', icon: '≡', action: 'showAlign', submenu: true, key: 'align' },
                'fontFamily': { label: 'Font Family', icon: 'A', action: 'showFontFamily', submenu: true, key: 'fontFamily' },
                'fontSize': { label: 'Font Size', icon: 'A+', action: 'showFontSize', submenu: true, key: 'fontSize' },
                'lineHeight': { label: 'Line Height', icon: '⇅', action: 'showLineHeight', submenu: true, key: 'lineHeight' },
                'textColor': { label: 'Text Color', icon: '🎨', action: 'textColor', key: 'textColor' },
                'bgColor': { label: 'Background Color', icon: '🖌️', action: 'bgColor', key: 'bgColor' },
                'clearFormat': { label: 'Clear Formatting', icon: '🧹', action: 'removeFormat', key: 'clearFormat' }
            };

            items.forEach(item => {
                const action = menuActions[item];
                if (!action) return;

                const menuOption = document.createElement('div');
                menuOption.className = 'vibrte-menu-option';
                menuOption.style.cssText = `
                    padding: 8px 15px;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: background 0.2s;
                    position: relative;
                `;
                
                const labelSpan = document.createElement('span');
                
                // Use SVG icons or Emoji icons based on mode
                const iconSet = VibeRTEExtensions.useEmojiIcons ? VibeRTEExtensions.emojiIcons : VibeIcons;
                const iconCategory = this.getIconCategory(action.key);
                
                if (iconCategory && iconSet[iconCategory] && iconSet[iconCategory][action.key]) {
                    const iconContent = iconSet[iconCategory][action.key];
                    if (VibeRTEExtensions.useEmojiIcons) {
                        labelSpan.innerHTML = `<span style="font-size: 16px;">${iconContent}</span> <span style="margin-left: 8px;">${action.label}</span>`;
                    } else {
                        labelSpan.innerHTML = `${iconContent} <span style="margin-left: 8px;">${action.label}</span>`;
                    }
                } else {
                    labelSpan.innerHTML = `${action.icon} ${action.label}`;
                }
                
                menuOption.appendChild(labelSpan);

                if (action.shortcut) {
                    const shortcutSpan = document.createElement('span');
                    shortcutSpan.textContent = action.shortcut;
                    shortcutSpan.style.cssText = 'font-size: 11px; color: #999; margin-left: 20px;';
                    menuOption.appendChild(shortcutSpan);
                }

                // Handle submenus
                if (action.submenu) {
                    const arrow = document.createElement('span');
                    arrow.textContent = ' ▸';
                    arrow.style.marginLeft = '10px';
                    labelSpan.appendChild(arrow);

                    const submenu = this.createSubmenu(action.action);
                    menuOption.appendChild(submenu);

                    menuOption.addEventListener('mouseenter', () => {
                        submenu.style.display = 'block';
                    });

                    menuOption.addEventListener('mouseleave', () => {
                        submenu.style.display = 'none';
                    });
                }

                menuOption.addEventListener('mouseenter', () => {
                    menuOption.style.background = '#f0f0f0';
                });

                menuOption.addEventListener('mouseleave', () => {
                    menuOption.style.background = 'transparent';
                });

                if (!action.submenu) {
                    menuOption.addEventListener('click', (e) => {
                        e.stopPropagation();
                        dropdown.style.display = 'none';
                        this.executeAction(action.action);
                    });
                }

                dropdown.appendChild(menuOption);
            });

            return dropdown;
        }

        toggleIconMode() {
            VibeRTEExtensions.useEmojiIcons = !VibeRTEExtensions.useEmojiIcons;
            
            // Refresh all editors
            this.instances.forEach(instance => {
                const menubar = instance.menubar;
                if (menubar) {
                    // Rebuild menubar with new icons
                    const newMenubar = this.createMenubar();
                    menubar.parentNode.replaceChild(newMenubar, menubar);
                    instance.menubar = newMenubar;
                }
            });
            
            const mode = VibeRTEExtensions.useEmojiIcons ? 'emoji' : 'SVG';
            console.log(`Icons switched to ${mode} mode`);
        }

        getIconCategory(key) {
            const categories = {
                'file': ['new', 'preview', 'exportPDF', 'exportDOCX', 'exportHTML', 'exportImage', 'importHTML', 'importDOCX', 'print'],
                'edit': ['undo', 'redo', 'cut', 'copy', 'paste', 'selectAll', 'find', 'replace'],
                'format': ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'code', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'listBullet', 'listNumber', 'indent', 'outdent', 'clearFormat'],
                'insert': ['image', 'link', 'video', 'table', 'hr', 'emoji', 'specialChar'],
                'view': ['sourceCode', 'fullscreen', 'spellcheck', 'showBlocks']
            };
            
            for (const [category, keys] of Object.entries(categories)) {
                if (keys.includes(key)) {
                    return category;
                }
            }
            return null;
        }

        createSubmenu(action) {
            const submenu = document.createElement('div');
            submenu.className = 'vibrte-submenu';
            submenu.style.cssText = `
                display: none;
                position: absolute;
                left: 100%;
                top: 0;
                background: white;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                min-width: 150px;
                z-index: 1001;
                padding: 5px 0;
            `;

            let items = [];
            switch(action) {
                case 'showHeadings':
                    items = [
                        { label: 'Heading 1', value: 'h1' },
                        { label: 'Heading 2', value: 'h2' },
                        { label: 'Heading 3', value: 'h3' },
                        { label: 'Heading 4', value: 'h4' },
                        { label: 'Heading 5', value: 'h5' },
                        { label: 'Heading 6', value: 'h6' }
                    ];
                    items.forEach(item => {
                        const option = this.createSubmenuOption(item.label, () => {
                            this.executeCommand('formatBlock', item.value);
                        });
                        submenu.appendChild(option);
                    });
                    break;

                case 'showBlocks':
                    items = [
                        { label: 'Paragraph', value: 'p' },
                        { label: 'Div', value: 'div' },
                        { label: 'Blockquote', value: 'blockquote' },
                        { label: 'Pre', value: 'pre' }
                    ];
                    items.forEach(item => {
                        const option = this.createSubmenuOption(item.label, () => {
                            this.executeCommand('formatBlock', item.value);
                        });
                        submenu.appendChild(option);
                    });
                    break;

                case 'showAlign':
                    items = [
                        { label: 'Align Left', cmd: 'justifyLeft' },
                        { label: 'Align Center', cmd: 'justifyCenter' },
                        { label: 'Align Right', cmd: 'justifyRight' },
                        { label: 'Justify', cmd: 'justifyFull' }
                    ];
                    items.forEach(item => {
                        const option = this.createSubmenuOption(item.label, () => {
                            this.executeCommand(item.cmd);
                        });
                        submenu.appendChild(option);
                    });
                    break;

                case 'showFontFamily':
                    this.options.fontFamily.forEach(font => {
                        const option = this.createSubmenuOption(font, () => {
                            this.executeCommand('fontName', font);
                        });
                        option.style.fontFamily = font;
                        submenu.appendChild(option);
                    });
                    break;

                case 'showFontSize':
                    this.options.fontSize.forEach(size => {
                        const option = this.createSubmenuOption(size, () => {
                            this.setFontSize(size);
                        });
                        submenu.appendChild(option);
                    });
                    break;

                case 'showLineHeight':
                    this.options.lineHeight.forEach(height => {
                        const option = this.createSubmenuOption(`Line Height: ${height}`, () => {
                            this.setLineHeight(height);
                        });
                        submenu.appendChild(option);
                    });
                    break;
            }

            return submenu;
        }

        createSubmenuOption(label, onClick) {
            const option = document.createElement('div');
            option.textContent = label;
            option.style.cssText = `
                padding: 8px 15px;
                cursor: pointer;
                transition: background 0.2s;
            `;
            option.addEventListener('mouseenter', () => {
                option.style.background = '#f0f0f0';
            });
            option.addEventListener('mouseleave', () => {
                option.style.background = 'transparent';
            });
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                onClick();
                // Close all menus
                document.querySelectorAll('.vibrte-dropdown, .vibrte-submenu').forEach(el => {
                    el.style.display = 'none';
                });
            });
            return option;
        }
        
        handleToolbarCommand(instance, cmd) {
            instance.editor.focus();
            
            switch (cmd) {
                // Basic Formatting
                case 'bold':
                case 'italic':
                case 'underline':
                case 'strikethrough':
                case 'justifyLeft':
                case 'justifyCenter':
                case 'justifyRight':
                case 'justifyFull':
                case 'insertUnorderedList':
                case 'insertOrderedList':
                    document.execCommand(cmd, false, null);
                    break;
        
                // Insert actions
                case 'insertImage':
                    const url = prompt('Enter image URL:');
                    if (url) document.execCommand('insertImage', false, url);
                    break;
        
                case 'createLink':
                    const link = prompt('Enter link URL:');
                    if (link) document.execCommand('createLink', false, link);
                    break;
        
                // Source code view
                case 'viewSource':
                    this.toggleSourceMode(instance);
                    break;
        
                default:
                    console.warn('Unhandled toolbar command:', cmd);
                    break;
            }
        }

        createToolbar() {
            const toolbar = document.createElement('div');
            toolbar.className = 'vibrte-toolbar';
            toolbar.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                padding: 10px;
                background: #fafafa;
                border-bottom: 1px solid #e0e0e0;
                align-items: center;
            `;

            const icons = this.getIcons();
            
            const toolGroups = [
                ['undo', 'redo'],
                ['bold', 'italic', 'underline', 'strikethrough'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['insertUnorderedList', 'insertOrderedList', 'indent', 'outdent'],
                ['link', 'image', 'table'],
                ['removeFormat', 'viewSource', 'fullscreen']
            ];
            
            // Add heading selector
            const headingSelect = this.createSelect(
                ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6'],
                ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
                (value) => this.executeCommand('formatBlock', value)
            );
            toolbar.appendChild(headingSelect);

            // Add font family selector
            const fontSelect = this.createSelect(
                this.options.fontFamily,
                this.options.fontFamily,
                (value) => this.executeCommand('fontName', value)
            );
            toolbar.appendChild(fontSelect);

            // Add font size selector
            const sizeSelect = this.createSelect(
                this.options.fontSize,
                this.options.fontSize,
                (value) => this.setFontSize(value)
            );
            toolbar.appendChild(sizeSelect);

            // Add color pickers
            const textColorInput = document.createElement('input');
            textColorInput.type = 'color';
            textColorInput.title = 'Text Color';
            textColorInput.style.cssText = 'width: 40px; height: 30px; border: 1px solid #ddd; cursor: pointer;';
            textColorInput.addEventListener('input', (e) => this.executeCommand('foreColor', e.target.value));
            toolbar.appendChild(textColorInput);

            const bgColorInput = document.createElement('input');
            bgColorInput.type = 'color';
            bgColorInput.title = 'Background Color';
            bgColorInput.style.cssText = 'width: 40px; height: 30px; border: 1px solid #ddd; cursor: pointer;';
            bgColorInput.addEventListener('input', (e) => this.executeCommand('hiliteColor', e.target.value));
            toolbar.appendChild(bgColorInput);

            this.addDivider(toolbar);

            // Add tool buttons
            toolGroups.forEach((group, index) => {
                group.forEach(cmd => {
                    const btn = this.createButton(icons[cmd], cmd, cmd);
                    btn.addEventListener('click', () => {this.handleToolbarCommand(instance, cmd);});
                    toolbar.appendChild(btn);
                });
                
                if (index < toolGroups.length - 1) {
                    this.addDivider(toolbar);
                }
            });
            

            return toolbar;
        }

        createSelect(labels, values, onChange) {
            const select = document.createElement('select');
            select.style.cssText = `
                padding: 5px 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                background: white;
                cursor: pointer;
                font-size: 14px;
            `;

            labels.forEach((label, index) => {
                const option = document.createElement('option');
                option.value = values[index];
                option.textContent = label;
                select.appendChild(option);
            });

            select.addEventListener('change', (e) => {
                onChange(e.target.value);
                select.selectedIndex = 0;
            });

            return select;
        }

        createButton(icon, title, cmd, value = null) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'vibrte-btn';
            btn.innerHTML = icon;
            btn.title = title;
            btn.dataset.cmd = cmd;
            if (value) btn.dataset.value = value;
            
            btn.style.cssText = `
                border: 1px solid #ddd;
                background: white;
                padding: 6px 10px;
                cursor: pointer;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
                min-width: 32px;
                height: 32px;
            `;

            btn.addEventListener('mouseenter', () => {
                btn.style.background = '#e8e8e8';
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'white';
            });

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.executeAction(cmd, value);
            });

            return btn;
        }

        addDivider(toolbar) {
            const divider = document.createElement('div');
            divider.style.cssText = `
                width: 1px;
                height: 24px;
                background: #ddd;
                margin: 0 5px;
            `;
            toolbar.appendChild(divider);
        }

        createStatusbar() {
            const statusbar = document.createElement('div');
            statusbar.className = 'vibrte-statusbar';
            statusbar.style.cssText = `
                display: flex;
                justify-content: space-between;
                padding: 8px 15px;
                background: #fafafa;
                border-top: 1px solid #e0e0e0;
                font-size: 12px;
                color: #666;
            `;

            statusbar.innerHTML = `
                <span class="vibrte-word-count">Words: 0 | Characters: 0</span>
                <span class="vibrte-element-path">body</span>
            `;

            return statusbar;
        }

        setupEventListeners(instance) {
            const { editor, textarea, statusbar } = instance;

            editor.addEventListener('input', () => {
                textarea.value = editor.innerHTML;
                this.updateWordCount(editor, statusbar);
                
                if (editor.textContent.trim() === '') {
                    editor.setAttribute('data-placeholder', this.options.placeholder);
                } else {
                    editor.removeAttribute('data-placeholder');
                }

                if (this.options.onChange) {
                    this.options.onChange(editor.innerHTML);
                }
            });

            editor.addEventListener('mouseup', () => this.updateElementPath(editor, statusbar));
            editor.addEventListener('keyup', () => this.updateElementPath(editor, statusbar));

            editor.addEventListener('keydown', (e) => {
                if (e.ctrlKey || e.metaKey) {
                    const key = e.key.toLowerCase();
                    const shortcuts = {
                        'b': 'bold',
                        'i': 'italic',
                        'u': 'underline',
                        'z': 'undo',
                        'y': 'redo'
                    };
                    
                    if (shortcuts[key]) {
                        e.preventDefault();
                        this.executeCommand(shortcuts[key]);
                    }
                }

                if (e.key === 'Tab') {
                    e.preventDefault();
                    this.executeCommand('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;');
                }
            });

            this.updateWordCount(editor, statusbar);
        }

        setupAutosave(instance) {
            setInterval(() => {
                const content = instance.editor.innerHTML;
                const key = `vibrte_autosave_${instance.textarea.id || 'default'}`;
                try {
                    sessionStorage.setItem(key, content);
                } catch (e) {
                    console.warn('Autosave failed:', e);
                }
            }, this.options.autosaveInterval);
        }

        executeAction(action, value = null) {
            const editor = document.querySelector('.vibrte-editor:focus') || document.querySelector('.vibrte-editor');
            if (!editor) return;

            editor.focus();

            const actions = {
                'newDoc': () => {
                    if (confirm('Clear all content? This cannot be undone.')) {
                        editor.innerHTML = '';
                    }
                },
                'preview': () => this.preview(editor),
                'exportPDF': () => {
                    if (typeof VibeRTEExtensions !== 'undefined' && VibeRTEExtensions.exportPDF) {
                        VibeRTEExtensions.exportPDF(editor);
                    } else {
                        alert('PDF export requires jsPDF library. Check documentation.');
                    }
                },
                'exportDOCX': () => {
                    if (typeof VibeRTEExtensions !== 'undefined' && VibeRTEExtensions.exportDOCX) {
                        VibeRTEExtensions.exportDOCX(editor);
                    } else {
                        alert('DOCX export requires docx.js library. Check documentation.');
                    }
                },
                'exportHTML': () => this.exportHTML(editor),
                'exportImage': () => {
                    if (typeof VibeRTEExtensions !== 'undefined' && VibeRTEExtensions.exportImage) {
                        VibeRTEExtensions.exportImage(editor);
                    } else {
                        alert('Image export requires html2canvas library. Check documentation.');
                    }
                },
                'importHTML': () => this.importHTML(editor),
                'importDOCX': () => {
                    if (typeof VibeRTEExtensions !== 'undefined' && VibeRTEExtensions.importDOCX) {
                        VibeRTEExtensions.importDOCX(editor);
                    } else {
                        alert('DOCX import requires mammoth.js library. Check documentation.');
                    }
                },
                'print': () => this.print(editor),
                'viewSource': () => this.toggleSourceView(editor),
                'toggleSpellcheck': () => {
                    editor.spellcheck = !editor.spellcheck;
                    alert(`Spellcheck ${editor.spellcheck ? 'enabled' : 'disabled'}`);
                },
                'showBlocks': () => this.toggleBlockView(editor),
                'fullscreen': () => this.toggleFullscreen(editor),
                'createLink': () => {
                    const url = prompt('Enter URL:', 'https://');
                    if (url) this.executeCommand('createLink', url);
                },
                'link': () => {
                    const url = prompt('Enter URL:', 'https://');
                    if (url) this.executeCommand('createLink', url);
                },
                'table': () => this.insertTable(editor),
                'image': () => this.insertImage(editor),
                'insertImage': () => this.insertImage(editor),
                'insertVideo': () => this.insertVideo(editor),
                'insertIframe': () => this.insertIframe(editor),
                'insertCode': () => this.insertCodeSample(editor),
                'insertTable': () => this.insertTable(editor),
                'insertMath': () => this.insertMath(editor),
                'insertSpecialChar': () => this.insertSpecialChar(editor),
                'insertEmoji': () => this.insertEmoji(editor),
                'insertHR': () => this.executeCommand('insertHTML', '<hr>'),
                'insertPageBreak': () => this.executeCommand('insertHTML', '<div style="page-break-after: always;"></div>'),
                'insertNBSP': () => this.executeCommand('insertHTML', '&nbsp;'),
                'insertTOC': () => this.insertTOC(editor),
                'find': () => this.find(editor),
                'findReplace': () => this.findReplace(editor),
                'toggleIconMode': () => this.toggleIconMode()
            };

            if (actions[action]) {
                actions[action]();
            } else {
                this.executeCommand(action, value);
            }
        }

        executeCommand(cmd, value = null) {
            const editor = document.querySelector('.vibrte-editor:focus') || document.querySelector('.vibrte-editor');
            if (!editor) return;

            switch(cmd) {
                case 'formatBlock':
                    document.execCommand(cmd, false, `<${value}>`);
                    break;
                default:
                    document.execCommand(cmd, false, value);
            }

            if (editor.rteTextarea) {
                editor.rteTextarea.value = editor.innerHTML;
            }
        }

        setFontSize(size) {
            this.executeCommand('fontSize', '7');
            const editor = document.querySelector('.vibrte-editor:focus') || document.querySelector('.vibrte-editor');
            const fonts = editor.querySelectorAll('font[size="7"]');
            fonts.forEach(f => {
                f.removeAttribute('size');
                f.style.fontSize = size;
            });
        }

        setLineHeight(height) {
            const editor = document.querySelector('.vibrte-editor:focus') || document.querySelector('.vibrte-editor');
            const selection = window.getSelection();
            
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                let container = range.commonAncestorContainer;
                
                if (container.nodeType === 3) {
                    container = container.parentNode;
                }
                
                while (container && container !== editor) {
                    if (container.nodeType === 1 && (container.tagName === 'P' || container.tagName === 'DIV' || container.tagName.match(/^H[1-6]$/))) {
                        container.style.lineHeight = height;
                        break;
                    }
                    container = container.parentNode;
                }
            }
        }

        insertImage(editor) {
            const url = prompt('Enter image URL:', 'https://');
            if (url) {
                this.executeCommand('insertImage', url);
            }
        }

        insertVideo(editor) {
            const url = prompt('Enter video embed URL (YouTube, Vimeo, etc.):', '');
            if (url) {
                let embedCode = '';
                if (url.includes('youtube.com') || url.includes('youtu.be')) {
                    const videoId = url.split('v=')[1] || url.split('/').pop();
                    embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
                } else if (url.includes('vimeo.com')) {
                    const videoId = url.split('/').pop();
                    embedCode = `<iframe src="https://player.vimeo.com/video/${videoId}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
                } else {
                    embedCode = `<video width="560" height="315" controls><source src="${url}"></video>`;
                }
                this.executeCommand('insertHTML', embedCode);
            }
        }

        insertIframe(editor) {
            const url = prompt('Enter iframe URL:', 'https://');
            if (url) {
                const iframe = `<iframe src="${url}" width="100%" height="400" frameborder="0"></iframe>`;
                this.executeCommand('insertHTML', iframe);
            }
        }

        insertCodeSample(editor) {
            const code = prompt('Enter code:');
            if (code) {
                const codeBlock = `<pre><code>${this.escapeHtml(code)}</code></pre>`;
                this.executeCommand('insertHTML', codeBlock);
            }
        }

        insertTable(editor) {
            const rows = prompt('Number of rows:', '3');
            const cols = prompt('Number of columns:', '3');
            
            if (rows && cols) {
                let table = '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; margin: 10px 0;">';
                for (let i = 0; i < parseInt(rows); i++) {
                    table += '<tr>';
                    for (let j = 0; j < parseInt(cols); j++) {
                        table += '<td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>';
                    }
                    table += '</tr>';
                }
                table += '</table><p><br></p>';
                this.executeCommand('insertHTML', table);
            }
        }

        insertMath(editor) {
            const formula = prompt('Enter math formula (LaTeX syntax):', 'x^2 + y^2 = z^2');
            if (formula) {
                const mathHtml = `<span class="math-formula" style="font-style: italic; background: #f0f0f0; padding: 2px 6px; border-radius: 3px;">${formula}</span>`;
                this.executeCommand('insertHTML', mathHtml);
            }
        }

        insertSpecialChar(editor) {
            const chars = ['©', '®', '™', '§', '¶', '†', '‡', '•', '…', '€', '£', '¥', '±', '×', '÷', '≠', '≤', '≥', '∞', '∑', '∏', '√', 'α', 'β', 'γ', 'π', 'Ω'];
            
            const modal = this.createPickerModal('Special Characters', chars);
            document.body.appendChild(modal);
            
            modal.querySelectorAll('.vibrte-picker-item').forEach(item => {
                item.addEventListener('click', () => {
                    this.executeCommand('insertHTML', item.textContent);
                    modal.remove();
                    editor.focus();
                });
            });
        }

        insertEmoji(editor) {
            const emojis = ['😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '👍', '👎', '👌', '✌️', '🤞', '🤟', '🤘', '🤙', '👏', '💪', '🙏', '❤️', '💙', '💚', '💛', '🧡', '💜', '🖤', '🤍', '💔', '❣️', '💕', '💖', '⭐', '✨', '🔥', '💯', '🎉', '🎊', '🎈', '🎁', '🏆', '🌟', '💎', '🌈', '☀️', '🌙', '⚡', '🔔', '🎵', '🎨'];
            
            const modal = this.createPickerModal('Emojis', emojis);
            document.body.appendChild(modal);
            
            modal.querySelectorAll('.vibrte-picker-item').forEach(item => {
                item.addEventListener('click', () => {
                    this.executeCommand('insertHTML', item.textContent);
                    modal.remove();
                    editor.focus();
                });
            });
        }

        createPickerModal(title, items) {
            const modal = document.createElement('div');
            modal.className = 'vibrte-modal';
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            `;

            const content = document.createElement('div');
            content.style.cssText = `
                background: white;
                padding: 20px;
                border-radius: 8px;
                max-width: 500px;
                max-height: 80vh;
                overflow-y: auto;
            `;

            const header = document.createElement('div');
            header.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
            `;
            header.innerHTML = `
                <h3 style="margin: 0;">${title}</h3>
                <button class="vibrte-close" style="background: none; border: none; font-size: 24px; cursor: pointer; padding: 0; width: 30px; height: 30px;">&times;</button>
            `;

            const grid = document.createElement('div');
            grid.style.cssText = `
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
                gap: 10px;
            `;

            items.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'vibrte-picker-item';
                btn.textContent = item;
                btn.style.cssText = `
                    padding: 10px;
                    border: 1px solid #ddd;
                    background: white;
                    cursor: pointer;
                    border-radius: 4px;
                    font-size: 20px;
                    transition: all 0.2s;
                `;
                btn.addEventListener('mouseenter', () => {
                    btn.style.background = '#f0f0f0';
                    btn.style.transform = 'scale(1.1)';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.background = 'white';
                    btn.style.transform = 'scale(1)';
                });
                grid.appendChild(btn);
            });

            content.appendChild(header);
            content.appendChild(grid);
            modal.appendChild(content);

            const closeBtn = header.querySelector('.vibrte-close');
            closeBtn.addEventListener('click', () => modal.remove());
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.remove();
            });

            return modal;
        }

        insertTOC(editor) {
            const headings = editor.querySelectorAll('h1, h2, h3, h4, h5, h6');
            if (headings.length === 0) {
                alert('No headings found in document. Add headings first.');
                return;
            }

            let toc = '<div class="table-of-contents" style="border: 1px solid #ddd; padding: 15px; margin: 10px 0; background: #f9f9f9;"><h3>Table of Contents</h3><ul style="list-style: none; padding-left: 0;">';
            
            headings.forEach((heading, index) => {
                const level = parseInt(heading.tagName.charAt(1));
                const text = heading.textContent;
                const indent = (level - 1) * 20;
                heading.id = heading.id || `heading-${index}`;
                toc += `<li style="margin-left: ${indent}px;"><a href="#${heading.id}" style="text-decoration: none; color: #0066cc;">${text}</a></li>`;
            });
            
            toc += '</ul></div>';
            this.executeCommand('insertHTML', toc);
        }

        find(editor) {
            const searchTerm = prompt('Find:');
            if (!searchTerm) return;

            const content = editor.innerHTML;
            const regex = new RegExp(searchTerm, 'gi');
            const highlighted = content.replace(regex, match => 
                `<mark style="background: yellow;">${match}</mark>`
            );
            editor.innerHTML = highlighted;
        }

        findReplace(editor) {
            const searchTerm = prompt('Find:');
            if (!searchTerm) return;
            
            const replaceTerm = prompt('Replace with:');
            if (replaceTerm === null) return;

            const content = editor.innerHTML;
            const regex = new RegExp(searchTerm, 'gi');
            editor.innerHTML = content.replace(regex, replaceTerm);
        }

        toggleSourceView(editor) {
            const instance = this.instances.find(inst => inst.editor === editor);
            if (!instance) return;

            if (instance.isSourceView) {
                editor.innerHTML = editor.textContent;
                editor.contentEditable = 'true';
                editor.style.fontFamily = '';
                editor.style.whiteSpace = '';
                instance.isSourceView = false;
            } else {
                const html = editor.innerHTML;
                editor.textContent = html;
                editor.contentEditable = 'true';
                editor.style.fontFamily = 'monospace';
                editor.style.whiteSpace = 'pre-wrap';
                instance.isSourceView = true;
            }
        }

        toggleBlockView(editor) {
            const blocks = editor.querySelectorAll('div, p, h1, h2, h3, h4, h5, h6, blockquote, pre');
            blocks.forEach(block => {
                if (block.style.outline) {
                    block.style.outline = '';
                } else {
                    block.style.outline = '1px dashed #999';
                }
            });
        }

        toggleFullscreen(editor) {
            const instance = this.instances.find(inst => inst.editor === editor);
            if (!instance) return;

            const wrapper = instance.wrapper;

            if (!instance.isFullscreen) {
                wrapper.classList.add('vibrte-fullscreen');
                wrapper.style.cssText += `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 9999;
                    border-radius: 0;
                `;
                editor.style.maxHeight = 'calc(100vh - 200px)';
                instance.isFullscreen = true;
            } else {
                wrapper.classList.remove('vibrte-fullscreen');
                wrapper.style.position = '';
                wrapper.style.top = '';
                wrapper.style.left = '';
                wrapper.style.width = this.options.width;
                wrapper.style.height = '';
                wrapper.style.zIndex = '';
                wrapper.style.borderRadius = '8px';
                editor.style.maxHeight = '800px';
                instance.isFullscreen = false;
            }
        }

        preview(editor) {
            const previewWindow = window.open('', '_blank');
            const content = editor.innerHTML;
            previewWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Preview</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
                        img { max-width: 100%; height: auto; }
                        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
                        td, th { border: 1px solid #ddd; padding: 8px; }
                    </style>
                </head>
                <body>${content}</body>
                </html>
            `);
            previewWindow.document.close();
        }

        print(editor) {
            const printWindow = window.open('', '_blank');
            const content = editor.innerHTML;
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Print</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; }
                        @media print {
                            body { padding: 0; }
                        }
                    </style>
                </head>
                <body>${content}</body>
                </html>
            `);
            printWindow.document.close();
            setTimeout(() => {
                printWindow.print();
            }, 250);
        }

        exportHTML(editor) {
            const content = editor.innerHTML;
            const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.6; }
        img { max-width: 100%; height: auto; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        td, th { border: 1px solid #ddd; padding: 8px; }
        blockquote { border-left: 4px solid #ddd; margin: 15px 0; padding: 10px 15px; background: #f9f9f9; }
        code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; }
        pre { background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
    </style>
</head>
<body>
${content}
</body>
</html>`;
            
            const blob = new Blob([fullHTML], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'document.html';
            a.click();
            URL.revokeObjectURL(url);
        }

        exportPDF(editor) {
            alert('PDF export requires jsPDF library. Check documentation.');
        }

        exportDOCX(editor) {
            alert('DOCX export requires docx.js library. Check documentation.');
        }

        importHTML(editor) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.html';
            input.onchange = (e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                    editor.innerHTML = event.target.result;
                };
                reader.readAsText(file);
            };
            input.click();
        }

        updateWordCount(editor, statusbar) {
            if (!statusbar) return;

            const text = editor.textContent || '';
            const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
            const chars = text.length;

            const wordCountEl = statusbar.querySelector('.vibrte-word-count');
            if (wordCountEl) {
                wordCountEl.textContent = `Words: ${words} | Characters: ${chars}`;
            }
        }

        updateElementPath(editor, statusbar) {
            if (!statusbar) return;

            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                let node = selection.getRangeAt(0).startContainer;
                const path = [];

                while (node && node !== editor) {
                    if (node.nodeType === 1) {
                        path.unshift(node.tagName.toLowerCase());
                    }
                    node = node.parentNode;
                }

                const pathEl = statusbar.querySelector('.vibrte-element-path');
                if (pathEl) {
                    pathEl.textContent = path.length > 0 ? path.join(' > ') : 'body';
                }
            }
        }

        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        getIcons() {
            return {
                undo: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"/></svg>`,
                redo: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"/></svg>`,
                bold: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6zm0 8h9a4 4 0 014 4 4 4 0 01-4 4H6z"/></svg>`,
                italic: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4h10v4h-3l-4 8h3v4H6v-4h3l4-8H10V4z"/></svg>`,
                underline: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3v8a6 6 0 0012 0V3h-2v8a4 4 0 01-8 0V3H6zm0 18h12v2H6v-2z"/></svg>`,
                strikethrough: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h18v2H3v-2zm6-6h6a3 3 0 013 3v1h-2V9a1 1 0 00-1-1H9a1 1 0 00-1 1v1H6V9a3 3 0 013-3zm6 12a1 1 0 001-1v-1h2v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1h2v1a1 1 0 001 1h6z"/></svg>`,
                justifyLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm0 4h12v2H3V9zm0 4h18v2H3v-2zm0 4h12v2H3v-2z"/></svg>`,
                justifyCenter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm3 4h12v2H6V9zm-3 4h18v2H3v-2zm3 4h12v2H6v-2z"/></svg>`,
                justifyRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm6 4h12v2H9V9zm-6 4h18v2H3v-2zm6 4h12v2H9v-2z"/></svg>`,
                justifyFull: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm0 4h18v2H3V9zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/></svg>`,
                insertUnorderedList: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h2v2H4V6zm4 1h12v1H8V7zM4 11h2v2H4v-2zm4 1h12v1H8v-1zm-4 4h2v2H4v-2zm4 1h12v1H8v-1z"/></svg>`,
                insertOrderedList: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h2v4H3V4zm0 6h2v1H4v1h1v1H3v-3zm0 5h1.8L3 17.1v.9h2v-1H3.2l1.8-2.1V14H3v1zm5-9h12v1H8V6zm0 5h12v1H8v-1zm0 5h12v1H8v-1z"/></svg>`,
                indent: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm0 4v6l4-3-4-3zm6 2h12v2H9v-2zm0 4h12v2H9v-2zM3 19h18v2H3v-2z"/></svg>`,
                outdent: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm4 4v6l-4-3 4-3zm2 2h12v2H9v-2zm0 4h12v2H9v-2zM3 19h18v2H3v-2z"/></svg>`,
                link: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
                image: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
                table: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
                removeFormat: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6zm14 14l-1.41-1.41L5.41 4.41 4 5.82l6.18 6.18L8 17h3l1.39-3.28 6.89 6.89L20 19z"/></svg>`,
                viewSource: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>`,
                fullscreen: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>`
            };
        }

        getContent(index = 0) {
            return this.instances[index]?.editor.innerHTML || '';
        }

        setContent(content, index = 0) {
            if (this.instances[index]) {
                this.instances[index].editor.innerHTML = content;
                this.instances[index].textarea.value = content;
            }
        }

        destroy(index = 0) {
            if (this.instances[index]) {
                const instance = this.instances[index];
                instance.wrapper.remove();
                instance.textarea.style.display = '';
                this.instances.splice(index, 1);
            }
        }
    }

    // Add global styles
    const style = document.createElement('style');
    style.textContent = `
        .vibrte-editor[data-placeholder]:empty:before {
            content: attr(data-placeholder);
            color: #999;
            font-style: italic;
        }
        
        .vibrte-editor:focus {
            outline: none;
        }
        
        .vibrte-editor img {
            max-width: 100%;
            height: auto;
        }
        
        .vibrte-editor table {
            border-collapse: collapse;
            margin: 10px 0;
        }
        
        .vibrte-editor table td,
        .vibrte-editor table th {
            border: 1px solid #ddd;
            padding: 8px;
        }
        
        .vibrte-editor h1 { font-size: 2em; margin: 20px 0 10px; font-weight: bold; }
        .vibrte-editor h2 { font-size: 1.5em; margin: 18px 0 10px; font-weight: bold; }
        .vibrte-editor h3 { font-size: 1.25em; margin: 16px 0 10px; font-weight: bold; }
        .vibrte-editor h4 { font-size: 1.1em; margin: 14px 0 10px; font-weight: bold; }
        .vibrte-editor h5 { font-size: 1em; margin: 12px 0 10px; font-weight: bold; }
        .vibrte-editor h6 { font-size: 0.9em; margin: 10px 0 10px; font-weight: bold; }
        
        .vibrte-editor p { margin: 10px 0; }
        
        .vibrte-editor ul,
        .vibrte-editor ol {
            margin: 10px 0;
            padding-left: 40px;
        }
        
        .vibrte-editor blockquote {
            border-left: 4px solid #ddd;
            margin: 15px 0;
            padding: 10px 15px;
            color: #666;
            background: #f9f9f9;
        }
        
        .vibrte-editor *{
            color: inherit;
        }
        
        .vibrte-editor a {
            color: #0066cc;
            text-decoration: underline;
        }
        
        .vibrte-editor code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }
        
        .vibrte-editor pre {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            margin: 10px 0;
        }
        
        .vibrte-editor pre code {
            background: none;
            padding: 0;
        }
        
        .vibrte-btn:active {
            transform: scale(0.95);
        }

        .vibrte-btn:hover {
            background: #e8e8e8 !important;
        }
    `;
    document.head.appendChild(style);

    // jQuery-style initialization
    if (window.jQuery) {
        jQuery.fn.VibeRTE = function(options) {
            return this.each(function() {
                new VibeRTE(this, options);
            });
        };
    }

    // Vanilla JS initialization
    window.VibeRTE = VibeRTE;

})(window);
