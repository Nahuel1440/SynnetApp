import React from "react";
import { getAllSponsors} from "../../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ControlSponsorsList.module.css"
import ControlCardSponsor from "../ControlCardSponsor/ControlCardSponsor";


export default function ControlSponsorsList() {
  const sponsors = useSelector((state) => state.rootReducer.sponsors);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSponsors());
  }, [dispatch]);

  return (
    <div className={styles.userBox}>
      {sponsors &&
        sponsors.map((p) => {
          return (
              <ControlCardSponsor 
                id_sponsor={p.id_sponsor}
                company={p.company}
                message={p.message}
                logo={p.logo}
                link={p.link}
              />
          )})}
    </div>
  );
}
