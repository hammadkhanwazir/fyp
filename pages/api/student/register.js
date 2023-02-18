import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, departement_name, password, email, contact_no, reg_no } =
        req.body;
      const student = await prisma.student.create({
        data: {
          name: name,
          email: email,
          password: password,
          departement_name: departement_name,
          reg_no: parseInt(reg_no),
          contact_no: contact_no,
        },
      });
      console.log(student);
      res.status(200).json(student);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  } else if (req.method === "PUT") {
    try {
      const { email, data } = req.body;
      const student = await prisma.student.update({
        where: { email: email },
        data: { ...data },
      });
      if (!student) return res.status(404).json("No student found");
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === "DELETE") {
    try {
      const { email } = req.body;
      const student = await prisma.student.delete({
        where: {
          email: email,
        },
      });
      res.status(200).json("Student deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
