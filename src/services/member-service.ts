import axios from "axios";
import type { Member } from "@/types/members";

export async function getMembersFromCSV(url: string): Promise<Member[]> {
  const response = await axios.get(url);
  const csvData = response.data;

  const rows = csvData.split("\n");
  const headers = rows[0].split(",");

  const result = rows
    .slice(1)
    .map((row: string) => {
      const values = row.split(",");
      const member: any = {};

      headers.forEach((header: string, index: number) => {
        member[header.trim()] = values[index]?.trim() || "";
      });

      return member as Member;
    })
    .filter((member: Member) => member.nombre);
  
  return result;
}
