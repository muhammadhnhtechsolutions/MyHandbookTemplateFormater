import { useEffect, useState } from "react";
import { Getalldata, getOtherMemberService } from "@/app/services/FAmilymemberServices";
// Replace with your actual service file

const useFamilyMember = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [familyOtherMembers, setFamilyOtherMembers] = useState([]);
  //

  // const result = await Getalldata();
  // if (result.status) {

  //
  const fetchFamily = async () => {
    try {
      const data = await Getalldata();
      setFamilyMembers(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const fetchOtherMember = async () => {
    try {
      const data = await getOtherMemberService();
      setFamilyOtherMembers(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFamily();
    fetchOtherMember()
    // Cleanup function (optional)
    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return { loading, error, familyMembers,fetchFamily,familyOtherMembers ,setFamilyMembers};
};

export default useFamilyMember;
