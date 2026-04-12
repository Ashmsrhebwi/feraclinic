import { motion } from "framer-motion"

export const BrandDivider = () => {
  return (
    <div className="brand-signature-divider">
      <div className="line" />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="accent" 
      />
      <div className="line" />
    </div>
  )
}
