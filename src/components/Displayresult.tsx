import styles from './displayresult.module.scss';

const Displayresult = ({ selectedUser }: Record<string, any>) => {
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__hero}>
        <div className={styles.card__avatar}>
          <img
            src={selectedUser.image}
            alt={selectedUser.firstName}
            crossOrigin="true"
          />
        </div>
        <div className={styles.card__bio}>
          <h2 className={styles.card__name}>
            {selectedUser.firstName} {selectedUser.lastName}
          </h2>
          <p className={styles.card__role}>{selectedUser.company.title}</p>
          <a
            href={`mailto:${selectedUser.email}`}
            className={styles.card__email}
          >
            {selectedUser.email}
          </a>
        </div>
      </div>

      <div className={styles.card__about}>
        <h3 className={styles.card__about_title}>About</h3>
        <p className={styles.card__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          asperiores qui error atque et assumenda autem aliquid voluptatibus
          veritatis nulla.
        </p>
      </div>
    </div>
  );
};

export default Displayresult;
