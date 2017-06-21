CREATE DEFINER=`chirper-admin`@`localhost` PROCEDURE `getChirp`(chirp_id INT)
BEGIN
	SELECT * 
    FROM Chirper.Chirp
    WHERE id  = chirp_id;
END