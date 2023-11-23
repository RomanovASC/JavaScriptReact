import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostsToStore } from "../store/reducers/postsReducer/postsReducer";
import { addUsersToStore } from "../store/reducers/usersReducer/usersReducer";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
} from "@chakra-ui/react";

export const PostsPage = () => {

  const dispatchPosts = useDispatch();
  const { isPostLoading, posts } = useSelector((state) => state.posts);
  useEffect(() => {
    getPostsData();
  }, []);

  const dispatchUsers = useDispatch();
  const { isUserLoading, users } = useSelector((state) => state.users);
  useEffect(() => {
    getUsersData();
  }, []);

  const getPostsData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("res", res);
        if (res.status == 200 && res?.data && Array.isArray(res.data)) {
          dispatchPosts(addPostsToStore({ loaded: true, posts: res.data }));
        }
      })
      .catch((error) => {
        dispatchPosts(addPostsToStore({ loaded: true, posts: [] }));
      });
  };

  const getUsersData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res", res);
        if (res.status == 200 && res?.data && Array.isArray(res.data)) {
          dispatchUsers(addUsersToStore({ loaded: true, users: res.data }));
        }
      })
      .catch((error) => {
        dispatchUsers(addUsersToStore({ loaded: true, users: [] }));
      });
  };

  return (
    <>
      <p>Posts:</p>
      <Stack direction={"row"} wrap={"wrap"}>
        {posts.map((post) => {
          const user = users.find((user) => user.id === post.userId);
        return (
          <Card border={"1px"} m={2} width={200}>
            <CardHeader>{user.username}</CardHeader>
            <CardBody>{post.title}</CardBody>
            <CardBody>{post.body}</CardBody>
          </Card>
        )})}
      </Stack>
      <Button>12</Button>
    </>
  );
};