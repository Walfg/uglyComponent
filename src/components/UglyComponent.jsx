import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Link as MuiLink,
} from "@mui/material";

export default function UglyComponent() {
  const { t } = useTranslation("common");

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.phone", "Teléfono"),
      value: "616765243",
      href: "tel:616765243",
    },
    {
      icon: Mail,
      label: t("contact.email", "Email"),
      value: "info@carrozasnavara.com",
      href: "mailto:info@carrozasnavara.com",
    },
    {
      icon: MapPin,
      label: t("contact.address", "Dirección"),
      value: "Partida Real Franch, 26. 03830 Muro de Alcoy",
      href: "https://maps.google.com/?q=Partida+Real+Franch+26+03830+Muro+de+Alcoy",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        background: "linear-gradient(to right, #1a202c, #2d3748)",
        overflow: "hidden",
        paddingY: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("../assets/bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 10,
        }}
      >
        <Grid container spacing={6} alignItems="flex-start">
          {/* Kontaktoz */}
          <Grid item xs={12} lg={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                style={{ marginBottom: "1.5rem" }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontFamily: "serif",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                  }}
                >
                  {t("contact.title", "Información de Contacto")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#cbd5e1",
                  }}
                >
                  {t(
                    "contact.description",
                    "Si tienes cualquier duda no dudes en ponerte en contacto con nosotros, estaremos encantados de responder a todas tus preguntas"
                  )}
                </Typography>
              </motion.div>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  style={{ marginBottom: "1rem" }}
                >
                  <Card
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "none",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s",
                      transform: "scale(1)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardContent sx={{ padding: 2 }}>
                      <MuiLink
                        href={item.href}
                        underline="none"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          color: "#fff",
                        }}
                        target={item.icon === MapPin ? "_blank" : "_self"}
                        rel={
                          item.icon === MapPin
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {/* ikono */}
                        <Box
                          sx={{
                            backgroundColor: "orange",
                            padding: "0.5rem",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <item.icon size={20} color="#fff" />
                        </Box>

                        {/* Teksto */}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ color: "#cbd5e1" }}
                          >
                            {item.label}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "500" }}
                          >
                            {item.value}
                          </Typography>
                        </Box>
                      </MuiLink>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Grid>
          {/* Mapha */}
          <Grid item xs={12} lg={6}>
            <motion.div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24214.758850029513!2d-0.4592842053328128!3d38.786823967250044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPartida%20Real%20Franch%2026%2003830%20Muro%20de%20Alcoy!5e1!3m2!1ses!2ses!4v1732716738087!5m2!1ses!2ses"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("contact.mapTitle", "Ubicación en Google Maps")}
              ></iframe>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
