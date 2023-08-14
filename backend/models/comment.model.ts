import {DB} from "../database/db";

const db: any = new DB();

class CommentModel {
    conn;
    constructor() {
        this.conn = db.conn;
    }
    async getAllComment() {
        const [comments] = await this.conn.query("SELECT * FROM pcs_comments");
        return comments;
    }
    async getSingleComment(id:number) {
        const [comment] = await this.conn.query("SELECT * FROM pcs_comments WHERE pcs_comment_id = ?", [id]);
        return comment[0];
    }
    async postComment(commentData: any) {
        await this.conn.query("INSERT INTO pcs_comments VALUES(?, ?, ?)",
          [commentData.pcs_comment_id, commentData.pcs_name, commentData.pcs_comment])
    }
    async editComment(id: number, commentData: any) {
        const updateCommentData = Object.entries(commentData);
        let setStatement = "";
        let preparedStatementData = [];
        for (let i = 0; i < updateCommentData.length; i++) {
            setStatement += `${updateCommentData[i][0]} = ?`;
            setStatement += (i + 1 !== updateCommentData.length) ? ", " : " ";
            preparedStatementData.push(updateCommentData[i][1]);
        }
        preparedStatementData.push(id);
        await this.conn.execute(`UPDATE pcs_comments SET ${setStatement} WHERE pcs_comment_id = ?`,
            preparedStatementData);
    }
    async deleteComment(id: number) {
        await db.conn.query("DELETE FROM pcs_comments WHERE pcs_comment_id = ?", [id])
    }
}

export {CommentModel}