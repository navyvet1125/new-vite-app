import { useFetcher } from "react-router-dom"
import PropTypes from "prop-types";
export default function Favorite(props) {
    Favorite.propTypes = {
      contact: PropTypes.object.isRequired,
    };
    // yes, this is a `let` for later
    const fetcher = useFetcher();
    let favorite = props.contact.favorite;
    if (fetcher.formData) {
      favorite = fetcher.formData.get("favorite") === "true";
    }
    return (
      <fetcher.Form method="post">
        <button
          name="favorite"
          value={favorite ? "false" : "true"}
          aria-label={
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {favorite ? "★" : "☆"}
        </button>
      </fetcher.Form>
    );
  }