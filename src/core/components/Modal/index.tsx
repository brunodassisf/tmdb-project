"use client";

import { createPortal } from "react-dom";

import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import { IModal } from "./Modal.interface";
import { modal_variant, opacity_variant } from "./Modal.constant";
import style from "./Modal.module.css";

export default function Modal({
  open,
  onClose,
  needUnderground,
  children,
}: IModal) {
  if (typeof document !== "undefined") {
    const elementModal = document.getElementById("__modal");

    return createPortal(
      <AnimatePresence>
        {open && (
          <>
            <style>
              {`
                html, body {
                    overflow: hidden;
                }
              `}
            </style>
            <motion.div
              variants={modal_variant}
              initial="initial"
              animate="animate"
              exit="exit"
              id="staticModal"
              data-modal-backdrop="static"
              aria-hidden="true"
              className={`${style.container_modal} ${
                needUnderground ? "!z-20" : ""
              }`}
            >
              <div className={style.modal}>
                <div className={style.modal_content}>
                  <button
                    type="button"
                    className={style.modal_close}
                    data-modal-hide="staticModal"
                    onClick={onClose}
                  >
                    <FaTimes size={24} />
                  </button>
                  <div className="p-4">{children}</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={opacity_variant}
              initial="initial"
              animate="animate"
              exit="exit"
              className={style.screen_opacity}
            ></motion.div>
          </>
        )}
      </AnimatePresence>,
      elementModal as HTMLElement
    );
  }
  return null;
}
