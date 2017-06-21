CREATE DEFINER=`chirper-admin`@`localhost` PROCEDURE `deleteChrip`(chirp_id INT)
BEGIN
	DELETE FROM Chirper.Chirp WHERE id=chirp_id;
END