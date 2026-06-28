import {Router, type Request, type Response} from "express";

export const planRouter = Router();

planRouter.post("/generate", async (req: Request, res: Response) => {
    try{
        const { userId } = req.body

        if(!userId) {
            return res.status(400).json({ error: "User Id is required"};)
        }

        const profile = await prisma.user_profile.findUniquw({
            where: { user_id: userId },
        });

        if(!profile){
            return res
            .status(400)
            .json({error: "User profile not found. Complete onboarding first. "})
        }

        

    }catch (error){
        console.error("Error generating plan, error");
        res.status(500).jason({erroe: "Failed to generae plan"})
    }

});

